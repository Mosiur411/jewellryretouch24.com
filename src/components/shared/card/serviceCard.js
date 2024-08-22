'use client';
import RoundedBtn from '../roundedBtn/page';
import CompareSlider from '../compareSlider/page';

export default function ServiceCard({ service }) {
    const { id, title, description, images, slug } = service;

    const retundata = id % 2 === 0 ? true : false;

    return (
        <div className={`bg-white dark:bg-[#1c1c1c] shadow-md shadow-gray-100 dark:shadow-[#0e0e0e] rounded-xl ${retundata ? 'md:flex md:flex-row-reverse' : 'md:flex'} my-10 border dark:border-gray-800`}>
            <div className='[250px] xl:h-[340px] md:w-1/2'>
                <CompareSlider before={images[0]?.beforeImg} after={images[0]?.afterImg} retundata={retundata} />
            </div>
            <div className={`p-4 md:w-1/2 border md:rounded-b-none rounded-b-xl dark:border-gray-800 ${retundata ? 'md:rounded-l-xl' : 'md:rounded-r-xl'}}`}>
                <h1 className='text-xl font-medium mb-3 text-[#748E63] dark:text-[#F9B572]'>{title}</h1>
                <p className='mb-5 text-gray-600 dark:text-gray-300 text-justify'>{description?.slice(0, 450)}...</p>
                <div className='flex items-center justify-start'>
                    <RoundedBtn text='View Details' type='button' href={`/services/${slug}`} />
                </div>
            </div>
        </div>
    );
}