import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/component/Home/Navbar/ResponsiveNav";
import PageTransition from "@/component/PageTransition";

const font = Rethink_Sans ({
  weight : ["400","500","600","700","800"],
  subsets : ["latin"],
})

export const metadata: Metadata = {
  title: "Tanaton Phukanngam",
  description: "Web application Profile for Tanaton Phukanngam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased `}>
        <ResponsiveNav/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}