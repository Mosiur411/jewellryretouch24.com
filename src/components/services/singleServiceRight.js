// icons import
import { GoServer } from "react-icons/go";

// Components
import Social from "../shared/social/page";
import ServiceCat from "../shared/serviceCat/page";

export default function SingleServiceRight() {

    const services = [
        {
            id: 1,
            text: 'Clipping Path Service',
            slug: 'clipping-path-service'
        },
        {
            id: 2,
            text: 'Photo Retouching Service',
            slug: 'photo-retouching-service'
        },
        {
            id: 3,
            text: 'Shadow Service',
            slug: 'shadow-service'
        },
        {
            id: 4,
            text: 'Image Manipulation/neck Joint Service',
            slug: 'golden-sunset-dining'
        },
        {
            id: 5,
            text: 'Image Maskin Service',
            slug: 'majestic-mountain-trek'
        },
        {
            id: 6,
            text: 'Photo Color Correction Service',
            slug: 'garden-of-tranquility'
        },

    ]
    return (
        <div className="lg:w-1/3">
           
            <div className="   bg-gray-50 dark:bg-[#1c1c1c] shadow-md shadow-gray-100 dark:shadow-[#0e0e0e]   rounded-xl p-5 py-7 h-fit">

                <div className=" flex items-start gap-3 text-lg ">
                    <GoServer className="text-[#748E63] dark:text-[#F9B572] mt-1" />
                    <p className=" text-lg font-medium  dark:text-white">All Services Categories :</p>
                </div>

                <div className="my-5 flex flex-col gap-2  dark:text-gray-300">
                    {
                        services?.map(service => <ServiceCat key={service?.id} text={service?.text} slug={service?.slug} />)
                    }

                </div>

                <div className="z-[1]  bg-gradient-to-r from-white dark:from-black via-[#748E63] dark:via-[#F9B572] to-white dark:to-black mb-7 mt-3 h-[0.5px]">
                    <div className=" h-[0.5px] w-full dark:bg-gray-300 bg-gray-400  z-[-1] relative"></div>
                </div>

                <Social />
            </div>
        </div>
    )
}
