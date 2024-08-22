import Reviews from "@/components/home/reviews/page";
import Blog from "../blog/page";
import Banner from "@/components/home/banner/Banner";
import OuseTems from "@/components/ourTems/OurTems";
import HomeGridImage from "@/components/home/homeGridImage";
export const metadata = {
  title: "JewellryRetouch24 - Professional Jewelry Retouching Services",
  description:
    "Welcome to JewellryRetouch24, your trusted source for professional jewelry retouching services. Enhance the beauty of your jewelry images with our expert retouching solutions.",
};

export default function Home() {
  return (
    <>
      <div className="relative container mx-auto  lg:px-10 sm:px-6 px-5  ">
        <Banner />
        <HomeGridImage />
        <Reviews />
        <Blog />
        <OuseTems />
      </div>
    </>
  );
}
