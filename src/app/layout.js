
"use client"
import "./globals.css";
import Navbar from "@/components/shared/navbar/page";
import Footer from "@/components/shared/footer/page";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Provider } from "react-redux";
import { store } from "@/features/store";


export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#121212]">
        <Provider store={store}>
          <div className="container mx-auto  lg:px-10 sm:px-6 px-5  ">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html >
  );
}
