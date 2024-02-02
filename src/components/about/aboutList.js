
import { IoMdCheckmarkCircle } from "react-icons/io";
export default function AboutList({ text }) {
    return (
        <div className=" flex items-center gap-3 mb-3">
            <IoMdCheckmarkCircle className="text-[#748E63] dark:text-[#F9B572] text-lg " />
            <p className=" font-medium text-gray-700 dark:text-gray-300 ">{text}</p>
        </div>
    )
}
