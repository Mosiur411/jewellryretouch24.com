'use client'
// components
export default function OurTems({ name, position, img, content }) {
    return (
        <div className="bg-none border border-gray-200 dark:border-gray-700 dark:bg-[#1c1c1c] shadow-md shadow-gray-100 dark:shadow-[#0e0e0e] rounded-xl hover:dark:border-gray-500 hover:border-gray-300">
            <img src={img} alt="blog" width={440}  className="h-[200px] rounded-t-xl" />
            <div className=" p-3">
                <h1 className=" text-xl font-medium text-[#748E63] dark:text-[#F9B572] ">{name} {position}</h1>
                <p className="text-black dark:text-white">
                    {content}
                </p>

            </div>
        </div>
    )
}