'use client'
import Image from "next/image";
// components
import RoundedBtn from "../roundedBtn/page";
export default function BlogCard({ blog }) {
    const { id } = blog
    return (
        <div className="bg-none border border-gray-200 dark:border-gray-700 dark:bg-[#1c1c1c] shadow-md shadow-gray-100 dark:shadow-[#0e0e0e] rounded-xl hover:dark:border-gray-500 hover:border-gray-300">
            <Image src={`/assect/image/blog/${blog.image}`} alt="blog" width={440} height={400} className="h-[300px] rounded-t-xl" />
            <div className=" p-3">
                <h1 className=" text-xl font-medium text-[#748E63] dark:text-[#F9B572] ">{blog?.title}</h1>
                <div className=" flex items-center justify-between my-3">
                    <p className=" text-sm font-medium text-gray-700 dark:text-gray-300">Category : <span className=" text-black  dark:text-white">{blog?.category}</span> </p>
                    <p className=" text-sm font-medium text-gray-700 dark:text-gray-300">Publish : <span className=" text-black  dark:text-white">{blog?.date}</span> </p>
                </div>
                <p className=" mb-5 text-gray-600 dark:text-gray-400">{blog?.description}</p>
                <div className=" flex justify-center mb-4">
                    <RoundedBtn text='Read Details' type='button' href={`blog/${id}`} />
                </div>
            </div>
        </div>
    )
}
