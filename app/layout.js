import Image from "next/image";

import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

// import { Inter } from "next/font/google";

import Link from "next/link";
import { Links } from "./components/links";
import { Header } from "./components/header";
import { HeaderMobile } from "./components/header-mobile";



// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Future of Work Council",
  description: "Generated by create next app",
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Image
          src="./images/GT_ABSTRACT_FORM-40.svg"
          width={1350}
          height={1350}
          alt=""
          className="img"
      />
 */}

        <div className="row g-0 h-100">
          <div className="col-12 d-md-none">
            <HeaderMobile />
          </div>
          <div className="d-none col-md-3 d-md-flex">
            <Header />
          </div>
          {/* <div className="flex-column border-right">


          <header className="header">
            <div className="logo">
              <Link href="/">The Future of Work Council</Link>
            </div>
            
            <Links/>
            
          </header>
          <div className="social border-top">
              <Link href="/">LinkedIn</Link>
              <Link href="/">Twitter</Link>
            </div>
            </div> */}

          <div className="col-12 col-md-9">{children}</div>
        </div>
      </body>
    </html>
  );
}
