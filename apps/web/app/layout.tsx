import { GlobalLayout } from "app/src/components/GlobalLayout";
import { Providers } from "app/src/providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <GlobalLayout>{children}</GlobalLayout>
        </Providers>
      </body>
    </html>
  );
}
