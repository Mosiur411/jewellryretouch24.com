import ServiceCarousel from "../carousel/ServiceCarousel";
import Title from "../shared/title/page";

export default function SingleServiceLeft({ singleService }) {
    const { images, content, title, slug, description } = singleService;
    const { afterImg } = images[0];

    return (
        <div className="lg:w-2/3 mb-10 lg:mb-0">
            <div className="mb-5">
                <ServiceCarousel imgData={images} />
            </div>
            {/*  <img src={afterImg} alt="serviceImg" className="w-full 2xl:h-[35rem] rounded-2xl mb-5" /> */}
            <Title text={`${title}:-`} />

            <div className="mt-7 mb-10">
                <p className="mt-7 mb-10 text-gray-600 dark:text-gray-300 text-justify">{description}</p>
                {content && content.description.map((data, i) => (
                    <div key={i}>
                        <h1 className="text-lg font-medium mb-3 text-gray-600 dark:text-gray-300">{data?.title}</h1>
                        <p className="mt-7 mb-10 text-gray-600 dark:text-gray-300 text-justify">{data?.text}</p>
                    </div>
                ))
                }
            </div>
        </div>
    );
}
