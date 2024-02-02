import Link from "next/link";
import { TbPointFilled } from "react-icons/tb";


export default function ServiceCat({ text, slug }) {
    return (
        <Link href={`${slug}`} className=" flex items-center gap-3 group  hover:text-[#748E63] hover:dark:text-[#F9B572] cursor-pointer ">
            <TbPointFilled className=" invisible group-hover:visible transition-all ease-linear duration-200 text-[#748E63] dark:text-[#F9B572]" />
            <p className=" text-[14px] font-medium">{text}</p>
        </Link>
    )
}
