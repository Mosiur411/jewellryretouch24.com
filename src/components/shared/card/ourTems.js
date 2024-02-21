'use client'
import Image from "next/image";
// components
import RoundedBtn from "../roundedBtn/page";
export default function OurTems({ name, position }) {
    return (
        <div className="bg-none border border-gray-200 dark:border-gray-700 dark:bg-[#1c1c1c] shadow-md shadow-gray-100 dark:shadow-[#0e0e0e] rounded-xl hover:dark:border-gray-500 hover:border-gray-300">
            <img src={`https://i.ibb.co/rtpPqzk/profile-iamges.jpg`} alt="blog" width={440} height={400} className="h-[300px] rounded-t-xl" />
            <div className=" p-3">
                <h1 className=" text-xl font-medium text-[#748E63] dark:text-[#F9B572] ">{name} {position}</h1>

            </div>
        </div>
    )
}