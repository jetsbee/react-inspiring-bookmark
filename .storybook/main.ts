import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(__dirname, "../src"),
      },
    },
    module: {
      ...config.module,
      rules: [
        ...(config.module?.rules || []),
        {
          test: /\.(js|jsx|ts|tsx)$/,
          loader: "@jsdevtools/coverage-istanbul-loader",
          enforce: "post",
          include: path.join(process.cwd(), "src"),
          exclude: [/\.(e2e|spec|stories)\.(js|jsx|ts|tsx)$/, /node_modules/],
        }, // ref. https://github.com/yannbf/storybook-coverage-recipes/blob/main/angular/README.md#setting-up-coverage
      ],
    },
  }), // ref. https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
  staticDirs: ["../public"], // Configures the static asset folder in Storybook
};
export default config;
