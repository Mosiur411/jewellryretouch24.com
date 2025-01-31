import Reviews from "@/components/home/reviews/page";
import Blog from "../blog/page";
import OuseTems from "@/components/ourTems/OurTems";
import Banner from "@/components/home/banner/Banner";
import ServiceCard from "@/components/shared/card/serviceCard";
import services from '/public/assect/json/services.json'
import SectionHeader from "@/components/shared/sectionHeader/page";

export const metadata = {
  title: "Photoeditspecialist - Professional Jewelry Retouching Services",
  description:
    "Welcome to Photoeditspecialist, your trusted source for professional jewelry retouching services. Enhance the beauty of your jewelry images with our expert retouching solutions.",
};

export default function Home() {
  return (
    <>
      {/* <Image data-aos="fade-right" src={bannerImage} alt={`banner gif file`}
        className='w-100 md:h-[90vh]'
      /> */}
      <div className="relative container mx-auto  lg:px-10 sm:px-6 px-5  ">
        <Banner />
        <SectionHeader lable='Our services'
          title='Our Awesome Services'
          shotDetails='' />
        <div className="xl:w-8/12 mx-auto ">
          {services?.slice(0, 6).map(service => <ServiceCard service={service} key={service?.id} />)}
        </div>
        {/* <HomeGridImage /> */}
        <Reviews />
        <Blog />
        <OuseTems />
      </div>
    </>
  );
}
