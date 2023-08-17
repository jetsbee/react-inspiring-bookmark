import { createAnimations } from "@tamagui/animations-react-native";
import { config as baseConfig } from "@tamagui/config";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createTamagui } from "tamagui";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

export const configBase = {
  ...baseConfig,
  defaultFont: "body",
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    // Something wrong with configuration consistency.
    // Appearance depends on the order of fonts key (i.e. heading, body || body, heading)

    /* Configuration might be enabled in the future */
    /*
    ...baseConfig.fonts,
    */
    body: {
      ...baseConfig.fonts.body,
      face: {
        ...baseConfig.fonts.body.face,
        300: { normal: "InterLight" },
        500: { normal: "InterMedium" },
        600: { normal: "InterSemiBold" },
      },
    }, // {fontWeight: 300|500|600, fontFamily: "$heading"} also work with above config. (Unexpected behavior)
    heading: {
      ...baseConfig.fonts.heading,
      face: {
        ...baseConfig.fonts.heading.face,
        /* Configuration might be enabled in the future */
        /*
        300: { normal: "InterLight" },
        500: { normal: "InterMedium" },
        600: { normal: "InterSemiBold" },
        */
      },
    },
  },
  themes: {
    ...themes,
    light: {
      ...themes.light,
      background: "#f8f8f8", // default
      color: "hsl(0, 0%, 9.0%)", // default
    },
    dark: {
      ...themes.dark,
      background: "#151515", // default
      color: "#fff", // default
    },
  },
  tokens,
  media: createMedia({
    xxs: { maxWidth: 440 },
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
};

export const config = createTamagui(configBase);
// ref. https://github.com/tamagui/tamagui/blob/6bc2a36b5f325d553fec33fd95f7f7303213ba37/starters/next-expo-solito/packages/ui/src/tamagui.config.ts
