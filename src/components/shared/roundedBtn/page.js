'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RoundedBtn({ text, href, type }) {
    // To active  button ni maching route
    const pathname = usePathname()
    return (
        <Link href={href ? href : ''} className={`text-[14px] font-medium px-5 pb-0.5 h-8 flex items-center justify-center border border-[#748E63] dark:border-[#F9B572] text-[#748E63]  dark:text-[#F9B572] rounded-full hover:bg-[#748E63] dark:hover:bg-[#F9B572]  ${pathname === '/freeTrial' ? "bg-[#748E63]  text-white dark:bg-[#F9B572] dark:hover:bg-transparent dark:text-black  dark:hover:text-[#F9B572] hover:bg-transparent hover:text-[#789365] " : "dark:hover:text-black  hover:text-white"} `}>
            <button type={type}>{text}</button>
        </Link>
    )
}
