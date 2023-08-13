import { GlobalLayout } from "app/src/components/GlobalLayout";
import { Providers } from "app/src/providers";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Providers>
      <GlobalLayout>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </GlobalLayout>
    </Providers>
  );
}
