'use client'
// Components
import SectionHeader from "@/components/shared/sectionHeader/page";
import ServiceCard from "@/components/shared/card/serviceCard";

// json data of services
import services from '/public/assect/json/services.json'

export default function Service() {
    return (
        <>
            <SectionHeader lable='Our Services' title='Our Awesome Services' shotDetails='Elevate your photos with precision edits. Professional photo editing services at Jewellry. Unleash the full potential of your visuals.' />

            <div className="  xl:w-8/12 mx-auto ">
                {services?.map(service => <ServiceCard service={service} key={service?.id}  />)}
            </div>
        </>
    )
}
