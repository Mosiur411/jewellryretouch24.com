import Image from "next/image";

// Images import
import heroImg1 from '/public/assect/image/about/hero/moreAbout1.jpg'
import heroImg2 from '/public/assect/image/about/hero/moreAbout2.jpg'
import heroImg3 from '/public/assect/image/about/hero/moreAbout3.jpg'

// Components
import AboutList from "./aboutList";
import Title from "../shared/title/page";
import ShortHeading from "../shared/shortHeading/page";


export default function AboutHero() {
    return (

        <div className=" container overflow-hidden md:overflow-visible mx-auto 2xl:gap-5 xl:gap-20 pt-16 pb-12 xl:mb-16 2xl:px-5 lg:flex items-center justify-between transition-all duration-300 ease-out ">

            {/* About left */}
            <div className=" xl:w-1/2 md:w-4/5 w-full mx-auto xl:mx-0 relative  2xl:p-2 h-full">
                <Image className=" absolute lg:-bottom-36 sm:-bottom-10 lg:-left-0 right-0 h-80  xl:w-[19rem] lg:w-[14rem] md:w-[19rem]  w-[15rem]   rounded-2xl shadow-xl z-[-1]" src={heroImg1} alt="moreabout Img" />
                <Image className=" absolute md:-bottom-20 bottom-6 xl:left-80 lg:left-40 xl:h-48 lg:h-32 h-60 lg:w-72 w-80 rounded-2xl z-[-3] shadow-xl" src={heroImg2} alt="moreabout Img" />
                <Image className=" absolute md:-top-20 xl:left-28 left-10 h-96 rounded-2xl  w-[25rem] shadow-xl hidden sm:block z-[-2]" src={heroImg3} alt="moreabout Img" />
                <div className=" sm:h-[22rem] h-[17rem] w-[22rem] sm:w-[28rem]  bg-[#748E63] dark:bg-[#F9B572]  opacity-10 rounded-3xl rotate-45 z-[-1]">
                </div>
            </div>

            {/* About Right */}
            <div className=" xl:w-1/2 md:w-4/5 w-full mx-auto xl:mx-0 mt-40 lg:mt-0">
                <div className="w-full ">
                    <ShortHeading text='About us' />
                    <div className=' font-medium mb-10'>
                        <Title text='Find Better Solution for you Images ' />
                    </div>
                    <p className="my-5 mb-3  dark:text-gray-300">
                        Elevate your visual storytelling with our cutting-edge photo editing agency. From precision retouching to creative enhancements, we bring artistry to every pixel. Discover the transformative impact of expert edits that redefine the narrative of your images.
                    </p>
                    <p className="mb-8 dark:text-gray-300  ">
                        Unleash the power of creativity with our photo editing expertise. Our agency specializes in bringing out the best in your visuals, ensuring each image tells a unique and compelling story.
                    </p>
                </div>
                {/* about services list */}
                <div className=" grid md:grid-cols-2 grid-cols-1 ">
                    <AboutList text='24/7 Call services available.' />
                    <AboutList text='Great Quality service.' />
                    <AboutList text='Free Call Service.' />
                    <AboutList text='10 Day Free services.' />
                    <AboutList text='Yearly Checker Service.' />
                    <AboutList text='Always Support Service.' />
                </div>
            </div>
        </div >
    )
}
