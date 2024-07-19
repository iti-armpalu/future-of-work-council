import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import { Links } from "./components/links";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="flex-column border-right">


          <header className="header">
            <div className="logo">
              <Link href="/">The Future of Work Council</Link>
            </div>
            {/* <nav className="navigation">
              <ul>
                <li>
                  <Link className={`${pathname === "about" ? "active" : ""}`} href="/"> About the Council </Link>
                </li>
                <li>
                  <Link href="/">Council Activities</Link>
                </li>
                <li>
                  <Link href="/">Partners</Link>
                </li>
                <li>
                  <Link href="/">Reports & Insights</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </nav> */}
            <Links/>
            
          </header>
          <div className="social border-top">
              <Link href="/">LinkedIn</Link>
              <Link href="/">Twitter</Link>
            </div>
            </div>
          {children}
        </div>
      </body>
    </html>
  );
}
