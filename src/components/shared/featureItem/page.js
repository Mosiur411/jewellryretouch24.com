import { LuCheckSquare } from "react-icons/lu";

export default function FeatureItem({ text }) {
    return (
        <div className=" flex items-start gap-4">
            <LuCheckSquare className="text-[#748E63] dark:text-[#F9B572] mt-1" />
            <p className=" text-gray-600 font-medium dark:text-gray-300 "> {text}</p>
        </div>
    )
}
