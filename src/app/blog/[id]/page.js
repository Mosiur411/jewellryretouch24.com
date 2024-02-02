// Images import
import Image from 'next/image'
// images
import blogBanner from '/public/assect/image/blog/blogbanner.png'

// Components
import Social from '@/components/shared/social/page'
import SingleBlogDetails from '@/components/blog/SingleBlogDetails'

export default function page() {
    return (
        <div>
            <Image src={blogBanner} alt='blogBanner' className=' w-full rounded-xl sm:h-[400px]' />

            <div className='sm:flex xl:gap-20 gap-7 lg:w-10/12 mx-auto py-10'>
                <div className=' flex flex-col gap-4  items-center mb-10 sm:mb-0'>
                    <div className='flex flex-col items-center justify-center sm:w-20 sm:h-20 w-14 h-14 rounded-md bg-[#748E63] dark:bg-[#F9B572] dark:text-black text-white'>
                        <h1 className=' sm:text-4xl text-2xl font-medium'>25</h1>
                        <p className=' text-sm sm:text-base'>nov, 25</p>
                    </div>
                    <div className=' sm:block hidden'>
                        <Social collum={true} />
                    </div>
                    <div className=' sm:hidden '>
                        <Social />
                    </div>
                </div>
                <SingleBlogDetails />
            </div>
        </div>
    )
}
