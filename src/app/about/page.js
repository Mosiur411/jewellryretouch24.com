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
      <AboutHero />
   {/*    <OurMission /> */}
      <AboutFeature />
    </>
  );
}
