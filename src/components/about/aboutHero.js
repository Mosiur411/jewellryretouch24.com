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
                <div className=" sm:h-[22rem] h-[17rem] w-[22rem] sm:w-[28rem]  bg-[#748E63] dark:bg-[#F9B572]  opacity-5 rounded-3xl rotate-45 z-[-1]">
                </div>
            </div>

            {/* About Right */}
            <div className=" xl:w-1/2 md:w-4/5 w-full mx-auto xl:mx-0 mt-40 lg:mt-0">
                <div className="w-full ">
                    <ShortHeading text='About us' />
                    <div className=' font-medium mb-10'>
                        <Title text='What You Should Know About Us' />
                    </div>
                    <p className="my-5 mb-3  dark:text-gray-300">
                    Photoeditspecialist retouch is an online based digital image editing studio that outsources and performs a number of services provider in Bangladesh. Number one quality full image editing service like image processing, graphic design multi path, photo restoration, Masking, Color Correction, Gost Retouching or Ghost retouching and online Clipping path services provider.We provide you image processing services at low costs because we understand how expensive it is to do it on your own.
                    </p>
                    <p className="mb-8 dark:text-gray-300  ">
                        The volume of work you have should not be part of your problem you can just relax. We have highly experience a big team who will treat your job like our own and ensure that you job is done within your own deadlines.
                    </p>
                    <p className="mb-8 dark:text-gray-300  ">
                        We are reliable and we ensure that we give our clients quality finished workOur company is a global company that meets international standards and offer services to its esteemed clients located in all the four corners of the earth. We offer service on 24/7 basis and this guarantees you the best services around the clock. This means that once you have contracted us, you can go ahead and focus on other important thing that appertains to your business since we guarantee timely delivery of your work.
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
