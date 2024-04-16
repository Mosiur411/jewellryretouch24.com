// Components
import SectionHeader from "@/components/shared/sectionHeader/page";
import ServiceCard from "@/components/shared/card/serviceCard";
export const metadata = {
    title: "Services - JewellryRetouch24",
    description: "Discover JewellryRetouch24's professional jewelry retouching services. Learn about the range of services we offer to enhance the beauty of your jewelry images.",
  };
import services from '/public/assect/json/services.json'


export default function Service() {

    
    return (
        <div className="relative container mx-auto  lg:px-10 sm:px-6 px-5  ">
            <SectionHeader lable='Our Services' title='Our Awesome Services' shotDetails='Elevate your photos with precision edits. Professional photo editing services at Jewellry. Unleash the full potential of your visuals.' />

            <div className="  xl:w-8/12 mx-auto ">
                {services?.slice(0,6).map(service => <ServiceCard service={service} key={service?.id}  />)}
            </div>
        </div>
    )
}
