import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import {
  TamaguiProvider /* note: design system can use @tamagui/core */,
  TamaguiProviderProps,
} from "tamagui";
import config from "../../tamagui.config";

export const TamaguiAppProvider = ({
  children,
  ...rest
}: Omit<TamaguiProviderProps, "config">) => {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    InterLight: require("@tamagui/font-inter/otf/Inter-Light.otf"),
    InterMedium: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterSemiBold: require("@tamagui/font-inter/otf/Inter-SemiBold.otf"),
  });
  const scheme = useColorScheme();

  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme={scheme === "dark" ? "dark" : "light"}
      {...rest}
    >
      {children}
    </TamaguiProvider>
  );
};
// ref 1. https://tamagui.dev/docs/guides/expo#add-tamagui-provider-and-theme-support
// ref 2. https://github.com/tamagui/tamagui/blob/6bee246180c117e49a46ff9c2de0b794c9c434f4/starters/next-expo-solito/packages/app/provider/index.tsx
// ref 3. https://github.com/tamagui/tamagui/blob/99807210ac9257a8d730a3982f890504c07a200e/starters/next-expo-solito/apps/expo/app/_layout.tsx
