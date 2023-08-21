import "./globals.css";
import type { Metadata } from "next";
import {Navbar} from "@/components";
import { Footer } from "@/components";
export const metadata: Metadata = {
  title: "Vehicle Hub",
  description: "Discover the best vehicles in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />  
        {children}
        <Footer/>
        </body>
    </html>
  );
}
