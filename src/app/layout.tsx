import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
  title: "BazaarDor",
  description: "Know the real price.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hindSiliguri.variable} h-full antialiased`}
    >
      <body className={`${hindSiliguri.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
