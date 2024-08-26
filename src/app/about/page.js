// Components
import AboutHero from "@/components/about/aboutHero";
import AboutFeature from "@/components/about/aboutFeature/aboutFeature";
export const metadata = {
  title: "About Us - JewellryRetouch24",
  description: "Learn more about JewellryRetouch24, the leading provider of professional jewelry retouching services. Discover our story, mission, and commitment to excellence.",
};
export default function About() {
  return (
    <>
      <div className="relative container mx-auto  lg:px-10 sm:px-6 px-5  ">
        <AboutHero />
        {/*   <OurMission/> */}
        <AboutFeature />
      </div>
    </>
  );
}
