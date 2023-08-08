import { GlobalLayout } from "app/src/components/GlobalLayout";
import { Providers } from "app/src/providers";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Providers>
      <GlobalLayout>
        <Slot />
      </GlobalLayout>
    </Providers>
  );
}
