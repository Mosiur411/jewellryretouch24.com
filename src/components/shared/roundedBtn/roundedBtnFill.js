'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RoundedBtnFill({ text, href, type }) {

    // To active  button
    const pathname = usePathname()

    return (
        <Link href={href ? href : ''} className={`text-[14px] font-medium px-5 pb-0.5 h-8 flex items-center justify-center border border-[#748E63] dark:border-[#F9B572] hover:text-[#748E63]  dark:hover:text-[#F9B572] rounded-full bg-[#748E63] hover:bg-transparent dark:bg-[#F9B572] dark:hover:bg-transparent dark:text-black text-white `}>
            <button type={type}>{text}</button>
        </Link>
    )
}
