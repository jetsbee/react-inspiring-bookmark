import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as ThemeProviderOG,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const scheme = useColorScheme();
  return (
    <ThemeProviderOG value={scheme === "dark" ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProviderOG>
  );
};
// ref. https://github.com/tamagui/tamagui/blob/99807210ac9257a8d730a3982f890504c07a200e/starters/next-expo-solito/apps/expo/app/_layout.tsx
