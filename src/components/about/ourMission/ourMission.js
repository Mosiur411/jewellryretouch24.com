
import OurMissionCard from './OurMissionCard';
import missions from '/public/assect/json/mission.json'
import SectionHeader from "@/components/shared/sectionHeader/page";
const OurMission = () => {
    return (
        <section className="mt-[19px] mb-[66px] px-10">
            <SectionHeader lable='Our Mission' title='Our Future Mission' shotDetails='Empower visual excellence through meticulous edits. Our mission is to redefine storytelling, transforming ordinary images into captivating narratives that leave a lasting impression on every viewer.' />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[29px] xl:w-10/12 mx-auto">
                {missions.map((item) => (
                    <OurMissionCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default OurMission;
