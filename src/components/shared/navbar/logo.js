import Link from "next/link";
import logo from '/public/assect/image/logo.png'
import Image from "next/image";

export default function Logo() {
    return (
        <Link href={'/'} className=" text-2xl font-semibold text-[#748E63] dark:text-[#F9B572]" >
            <Image src={logo} alt="logo" className=" w-28" />
        </Link>
    )
}
