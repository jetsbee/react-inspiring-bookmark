import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as ThemeProviderOG,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  const scheme = useColorScheme();

  if (!loaded) {
    return null;
  }
  return (
    <ThemeProviderOG value={scheme === "dark" ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProviderOG>
  );
};
