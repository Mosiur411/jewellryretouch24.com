import Title from '@/components/shared/title/page'
import ShortHeading from '@/components/shared/shortHeading/page'
import ImageGrids from '@/components/shared/imageGrids/imageGrids'
import RoundedBtnFill from '@/components/shared/roundedBtn/roundedBtnFill'
export default function Banner() {
    return (
        <section className="overflow-hidden pb-12  ">
            <div className="container mx-auto">
                <div className="lg:flex items-center justify-between gap-10 xl:gap-0 ">
                    <div className="w-full pl-4 lg:w-3/5 xl:w-6/12">
                        <ImageGrids />
                    </div>
                    <div className="w-full lg:w-2/5 xl:w-5/12">
                        <div className="mt-10 lg:mt-0">
                            <ShortHeading text='Jewellry' />
                            <div className=' font-medium mb-10 uppercase'>
                                <Title text='Welcome To photo Edit Agency!' />
                            </div>
                            <p className="my-5 mb-3  dark:text-gray-300">
                                Welcome to Jewellry, where we elevate your photos to new heights. Our expert team offers professional photo editing services, ensuring your images tell a captivating story. Upload your photos seamlessly, and let us transform them into visual masterpieces. Perfect your moments with us at Jewellry.
                            </p>
                            <p className="mb-8 dark:text-gray-300  ">
                                DiscoverJewellry, your premier destination for professional photo editing. Elevate your images with precision edits. Upload, perfect, and enjoy visually stunning results. Your photos, our expertise.
                            </p>
                            <div className=" flex">
                                <RoundedBtnFill text='See more' type='button' href={'/services'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

