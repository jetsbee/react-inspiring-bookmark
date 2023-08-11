import type { StorybookConfig } from "@storybook/nextjs";

import { dirname, join } from "path";
import { shouldExclude } from "tamagui-loader";

const tamaguiOptions = {
  config: "./tamagui.config.ts",
  components: ["tamagui", "tamaconfig"],
  // rest are all optional:
  // disable static extraction, faster to iterate in dev mode (default false)
  disableExtraction: process.env.NODE_ENV === "development",
  // By default, we configure webpack to pass anything inside your root or design system
  // to the Tamagui loader. If you are importing files from an external package, use this:
  shouldExtract: (path, projectRoot) => {
    if (path.includes(join("packages", "app"))) {
      return true;
    }
  },
};
const projectRoot = join(__dirname, "..");

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: getAbsolutePath("@storybook/addon-react-native-web"),
      options: {
        modulesToTranspile: [
          "solito",
          "expo-linking",
          "expo-constants",
          "expo-modules-core",
        ],
      },
    },
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  env: (config) => ({
    ...config,
    TAMAGUI_TARGET: "web",
  }),
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        // Resolve react-native to react-native-web
        "react-native$": require.resolve("react-native-web"),
      },
      extensions: [
        ".web.js",
        ".web.jsx",
        ".web.ts",
        ".web.tsx",
        ...(config.resolve?.extensions || []),
      ],
    },
    module: {
      ...config.module,
      rules: [
        ...(config.module?.rules || []),
        {
          test: /\.[jt]sx?$/,
          // you'll likely want to adjust this helper function,
          // but it serves as a decent start that you can copy/paste from
          exclude: (path) => shouldExclude(path, projectRoot),
          use: [
            // works nicely alongside esbuild
            {
              loader: "esbuild-loader",
            },
            {
              loader: "tamagui-loader",
              options: tamaguiOptions,
            },
          ],
        }, // ref. https://tamagui.dev/docs/intro/compiler-install#webpack
      ],
    },
  }),
};
export default config;
