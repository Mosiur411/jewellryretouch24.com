
"use client"
import "./globals.css";
import whatapps from '/public/assect/image/whatapps.png'

import Navbar from "@/components/shared/navbar/page";
import Footer from "@/components/shared/footer/page";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Provider } from "react-redux";
import { store } from "@/features/store";
import Image from "next/image";
import Link from "next/link";
import CompanyConnect from "@/components/companyConnect/CompanyConnect";


export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#121212]">
        <Provider store={store}>
          <div>
            <div className="sticky top-0 container mx-auto z-50  lg:px-10 sm:px-6 px-5 backdrop-blur-md">
              <Navbar />
            </div>
            <div className="z-40">
              {children}
            </div>
            <CompanyConnect/>
            <Footer />
            <div className="fixed  bottom-0 right-0 p-4">
              <Link href={'https://api.whatsapp.com/send/?phone=%2B8801897677943&text=Hello'}>
                <Image src={whatapps} alt="whatapps" width={70} className="rounded-full" />
              </Link>
            </div>
          </div>

        </Provider>
      </body>
    </html >
  );
}
