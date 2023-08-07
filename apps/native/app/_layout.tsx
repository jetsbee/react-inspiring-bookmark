import { StyledLayout } from "app/src/components/Layout";
import { Providers } from "app/src/providers";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Providers>
      <StyledLayout>
        <Slot />
      </StyledLayout>
    </Providers>
  );
}
