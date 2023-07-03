import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import Providers from "@/utils/providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inspiring Bookmark",
  description: "The quotes for inspiration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GlobalHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
