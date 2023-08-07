import { StyledLayout } from "app/src/components/Layout";
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
          <StyledLayout>{children}</StyledLayout>
        </Providers>
      </body>
    </html>
  );
}
