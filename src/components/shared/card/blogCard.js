'use client'
import Image from "next/image";
// components
import RoundedBtn from "../roundedBtn/page";
export default function BlogCard({ blog }) {
    return (
        <div className="bg-none border border-gray-200 dark:border-gray-700 dark:bg-[#1c1c1c] shadow-md shadow-gray-100 dark:shadow-[#0e0e0e] rounded-xl hover:dark:border-gray-500 hover:border-gray-300">
            <Image  src={`/assect/image/blog/${blog.image}`} alt="blog" width={440} height={400} className="h-[300px] rounded-t-xl bg-white" />
            <div className=" p-3">
                <h1 className=" text-md font-medium text-[#748E63] dark:text-[#F9B572] ">{blog?.title.slice(0,50)}..</h1>
                <p className=" mb-5 text-gray-600 dark:text-gray-400">{blog?.description.slice(0,100)}</p>
                <div className=" flex justify-center mb-4">
                    <RoundedBtn text='Read Details' type='button' href={`blog/${blog?.path}`} />
                </div>
            </div>
        </div>
    )
}
