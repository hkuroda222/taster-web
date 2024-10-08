import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/parts/header";
import { Wrap } from "@/components/parts/wrap";
import RecoilProvider from "@/app/recoilProvider";
import "@/app/globals.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasting Note",
  description: "ウイスキーのテイスティングノートを記録するアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilProvider>
          <Header />
          <Wrap>{children}</Wrap>
        </RecoilProvider>
      </body>
    </html>
  );
}
