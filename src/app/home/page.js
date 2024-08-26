import Reviews from "@/components/home/reviews/page";
import Blog from "../blog/page";
import OuseTems from "@/components/ourTems/OurTems";
import HomeGridImage from "@/components/home/homeGridImage";
import bannerImage from '/public/banner.gif'
import Image from "next/image";
export const metadata = {
  title: "JewellryRetouch24 - Professional Jewelry Retouching Services",
  description:
    "Welcome to JewellryRetouch24, your trusted source for professional jewelry retouching services. Enhance the beauty of your jewelry images with our expert retouching solutions.",
};

export default function Home() {
  return (
    <>
      <Image data-aos="fade-right" src={bannerImage} alt={`banner gif file`}
        className='w-100 md:h-[90vh]'
      />
      <div className="relative container mx-auto  lg:px-10 sm:px-6 px-5  ">
        {/*  <Banner /> */}
        <HomeGridImage />
        <Reviews />
        <Blog />
        <OuseTems />
      </div>
    </>
  );
}
