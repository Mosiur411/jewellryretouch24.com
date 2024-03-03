"use client"
import Image from "next/image";
// Icons
import { FaBookmark } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
// Components
import BlogCard from "../shared/card/blogCard";
// Images
import avator from '/public/assect/image/avator.png'
// Dummy data
import blogs from "/public/assect/json/blogs.json"
import { useParams } from "next/navigation";
import Head from "next/head";


export default function SingleBlogDetails() {
    const { id } = useParams()
    const filter = blogs?.find(data => data?.path == id)

    return (
        <>
            <Head>
                <title>{filter?.title}</title>
                <meta name="description" content={filter?.description} />
            </Head>
            <div className=' flex-1  p-2'>
                <div className=' mt-8'>
                    <h1 className=' sm:text-4xl text-[29px]  dark:text-white'>{filter?.title}</h1>
                    <p className=' my-7 text-gray-600 dark:text-gray-300 text-justify'>{filter?.description}</p>
                </div>
            </div>
        </>
    )
}
