import Image from "next/image";
import Link from "next/link";

// Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const OurMissionCard = ({ item }) => {
    return (
        <div className="card bg-gray-50 p-7 rounded-[14px] dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-700 hover:dark:border-gray-600 hover:border-gray-300">
            <div className="flex flex-col md:flex-row gap-5 items-center mb-8">
                <div
                    className={` p-[17px] rounded-full bg-[#748E63] dark:bg-[#F9B572]`}>
                    <Image width={36} height={36} src={`/assect/image/about/mission/${item.image}`} alt={item.title} />
                </div>
                <h4 className=" text-xl font-semibold leading-10 capitalize text-[#363848] dark:text-white">
                    {item.title}
                </h4>
            </div>
            <div>
                <p className="text-[#363848] mb-[19px] dark:text-gray-300">{item.description}</p>
                <Link
                    href={"/"}
                    className="text-sm font-medium  flex items-center gap-1 text-[#748E63] hover:text-[#ec9a48] dark:text-[#F9B572] hover:dark:text-[#dc9d5e]"
                >
                    Learn More <HiOutlineArrowNarrowRight className=" mt-0.5" />
                </Link>
            </div>
        </div>
    );
};

export default OurMissionCard;
