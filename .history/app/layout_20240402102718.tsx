import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./(routes)/(components)/sidebar";
import { NavMenu } from "./(routes)/(components)/nav-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full">
          <SideBar />
            <nav className="flex w-full">
            {/* <NavMenu /> */}
            </nav>
          <div>
            {children}
            </div>
        </div>
      </body>
    </html>
  );
}
