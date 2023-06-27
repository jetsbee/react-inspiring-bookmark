import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/utils/providers";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";

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
      <Providers>
        <body className={inter.className}>
          <GlobalHeader />
          {children}
        </body>
      </Providers>
    </html>
  );
}
