'use client';

import RoundedBtn from '../roundedBtn/page';
import Image from 'next/image';

export default function ServiceCard({ service }) {
    const { id, title, description, images, slug } = service;

    // Determine layout direction
    const isReversed = id % 2 === 0;

    return (
        <div
            className={`bg-white dark:bg-[#1c1c1c] shadow-md shadow-gray-100 dark:shadow-[#0e0e0e] rounded-xl ${isReversed ? 'md:flex md:flex-row-reverse' : 'md:flex'
                } my-10 border dark:border-gray-800`}
        >
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative  overflow-hidden rounded-t-xl md:rounded-none">
                <Image
                className="min-w-full rounded-xl md:rounded-none"
                    src={`/assect/service/${images[0]}`}
                    alt={title}
                    layout="fill"
                    
                //objectFit="contain" // Change from 'cover' to 'contain'
                />
            </div>

            {/* Content Section */}
            <div
                className={`p-4 md:w-1/2 border md:rounded-b-none rounded-b-xl dark:border-gray-800 ${isReversed ? 'md:rounded-l-xl' : 'md:rounded-r-xl'
                    }`}
            >
                <h1 className="text-xl font-medium mb-3 text-[#748E63] dark:text-[#F9B572]">
                    {title}
                </h1>
                <p className="mb-5 text-gray-600 dark:text-gray-300 text-justify">
                    {description?.slice(0, 200)}...
                </p>
                <div className="flex items-center justify-start">
                    <RoundedBtn text="View Details" type="button" href={`/services/${slug}`} />
                </div>
            </div>
        </div>
    );
}
