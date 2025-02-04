import Heading from "../heading/page";
import ShortHeading from "../shortHeading/page";


export default function SectionHeader({ lable, title, shotDetails }) {
    return (
        <div className="mb-10 text-center pt-5">
            <ShortHeading text={lable} />
            <Heading text={title} />
            <p className=" xl:w-1/2 lg:w-2/3 w-full mx-auto my-1 text-gray-600 dark:text-gray-300">{shotDetails}</p>
            <div className=" h-[1px] w-40 dark:bg-[#F9B572] bg-[#748E63]  mx-auto mt-3"></div>
        </div>
    )
}
