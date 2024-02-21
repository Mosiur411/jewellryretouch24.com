import Reviews from "@/components/home/reviews/page";
import Blog from "../blog/page";
import Service from "../services/page";
import Banner from "@/components/home/banner/Banner";
import OuseTems from "@/components/ourTems/OurTems";


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
