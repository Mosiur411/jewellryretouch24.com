// components
import FeatureCard from "./featureCard";
import SectionHeader from "@/components/shared/sectionHeader/page";

// Dummy data
import aboutFeature from '/public/assect/json/aboutFeature.json'

export default function AboutFeature() {
    return (
        <>
            <SectionHeader lable='Feature' title='Our Feature' shotDetails='Unlock creativity with our cutting-edge features. Precision editing, artistic enhancements, and efficient workflows redefine photo editing for a seamless visual journey.' />
            <div className=" xl:px-48 sm:px-28 py-6 sm:py-12 gap-y-10 lg:gap-y-0 grid grid-cols-2 lg:grid-cols-4 rounded-[5px] card gap-5 lg:gap-10 mb-20 ">
                {aboutFeature.map((item) => <FeatureCard key={item?.id} item={item} />)}
            </div>
        </>
    )
}
