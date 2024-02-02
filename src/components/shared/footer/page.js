'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

// logo
import Logo from "../navbar/logo";

// Import the JSON data
import menus from '../../../../public/assect/json/menus.json';

// component
import Row from "./row";

export default function Footer() {
  // To Get pathname for active menu
  const pathname = usePathname()
  return (
    <footer className="w-full  mx-auto py-4 md:py-8 mt-14">
      <div className="flex sm:flex-row flex-col items-center justify-center sm:justify-between mb-3">
        <Logo />
        <div className=" flex flex-wrap sm:flex-nowrap items-center sm:gap-10 gap-5 gap-y-1 sm:gap-y-0 mt-3 sm:mt-0 justify-center sm:justify-normal">
          {menus.map((menu, index) => (
            <Link key={index} className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] font-medium ${pathname === menu.link ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`} href={menu.link}>{menu.label}</Link>
          ))}
        </div>
      </div>
      <Row />
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400 mt-3">© 2023 Notex. All Rights Reserved.</span>
    </footer>
  )
}
