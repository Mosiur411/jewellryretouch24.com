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


export default function SingleBlogDetails() {
    return (
        <div className=' flex-1  p-2'>
            <div className=' flex items-start justify-between w-full '>
                <div className='flex items-center gap-3'>
                    <Image src={avator} alt='avator' className=' sm:h-20 sm:w-20 w-14 h-14 bg-[#748E63] dark:bg-[#F9B572] rounded-full' />
                    <div>
                        <h1 className=' text-xl font-medium  dark:text-white'>Jhon Wike</h1>
                        <p className=' text-gray-600 dark:text-gray-300'>Frontend Developer</p>
                    </div>
                </div>
                <div className=' flex items-center gap-4 '>
                    <FaBookmark className='text-[#748E63] hover:text-white hover:dark:text-white cursor-pointer dark:text-[#F9B572] text-lg' />
                    <IoShareSocialSharp className='text-[#748E63] hover:text-white hover:dark:text-white cursor-pointer dark:text-[#F9B572] text-xl' />
                </div>
            </div>

            <div className=' mt-8'>
                <h1 className=' sm:text-4xl text-[29px]  dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quia?</h1>
                <p className=' my-7 text-gray-600 dark:text-gray-300 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure ratione aliquid exercitationem ea reiciendis laborum magni. Veritatis commodi nostrum voluptatem iusto harum tempore deleniti dolore iste iure a consequatur fugit accusamus, quibusdam dicta debitis in magni voluptates, alias tempora at pariatur, velit accusantium? Impedit tempore libero optio! Dolore numquam consectetur, quisquam similique illo sunt quis at sequi id doloribus ducimus impedit aliquam blanditiis commodi quibusdam corrupti tempora reiciendis. Ab praesentium consectetur maiores tempore debitis doloribus? Ducimus modi consectetur qui?</p>
                <p className=' my-7 text-gray-600 dark:text-gray-300 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure ratione aliquid exercitationem ea reiciendis laborum magni. Veritatis commodi nostrum voluptatem iusto harum tempore deleniti dolore iste iure a consequatur fugit accusamus, quibusdam dicta debitis in magni voluptates, alias tempora at pariatur, velit accusantium? Impedit tempore libero optio! Dolore numquam consectetur, quisquam similique illo sunt quis at sequi id doloribus ducimus impedit aliquam blanditiis commodi quibusdam corrupti tempora reiciendis. Ab praesentium consectetur maiores tempore debitis doloribus? Ducimus modi consectetur qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odit voluptate ipsum in modi doloremque explicabo maxime. Aliquam modi obcaecati asperiores id maiores cumque at, velit molestias totam quod ullam beatae laudantium facere iure rerum vel ut omnis eum porro? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat possimus exercitationem maiores aut? Iste, consequuntur? Impedit quia, soluta ipsum maiores pariatur repellat ut sunt error nemo minus porro sed. </p>
            </div>


            <h1 className=' text-xl font-medium mb-4 mt-4 '>Related Blogs</h1>
            <div className=" grid  md:grid-cols-2 lg:gap-14 gap-5 ">
                {
                    blogs?.slice(0, 2)?.map((blog) => <BlogCard key={blog?.id} blog={blog} />)
                }
            </div>
        </div>
    )
}
