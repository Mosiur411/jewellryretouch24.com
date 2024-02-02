import Image from "next/image";
import { FaGift, FaUsers, FaHome, FaTrello } from 'react-icons/fa'

export default function FeatureCard({ item }) {
    return (
        <div
            key={item.id}
            className="flex flex-col items-center justify-center mb-4 sm:mb-0"
        >
            <div className=" border border-dashed  p-3 px-5 rounded-md text-5xl border-[#748E63]  dark:text-white">
                {item.id === 1 && <FaUsers />}
                {item.id === 2 && <FaGift />}
                {item.id === 3 && <FaHome />}
                {item.id === 4 && <FaTrello />}
            </div>
            <h3 className="text-center  text-[#748E63] dark:text-[#F9B572] lg:text-3xl  font-semibold mt-2 sm:mt-3">
                {item.total}
            </h3>
            <p className="text-center  text-[#535353] dark:text-gray-300 text-lg ">
                {item.description}
            </p>
        </div>
    )
}
