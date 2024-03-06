import Reviews from "@/components/home/reviews/page";
import Blog from "../blog/page";
import Service from "../services/page";
import Banner from "@/components/home/banner/Banner";
import OuseTems from "@/components/ourTems/OurTems";
export const metadata = {
  title: "JewellryRetouch24 - Professional Jewelry Retouching Services",
  description: "Welcome to JewellryRetouch24, your trusted source for professional jewelry retouching services. Enhance the beauty of your jewelry images with our expert retouching solutions.",
};


export default function Home() {
  return (
    <>
      <Banner />
      <Service />
      <Reviews />
      <Blog />
      <OuseTems />

      
    </>

  )
}
