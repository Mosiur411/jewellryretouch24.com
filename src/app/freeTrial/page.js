import FreeTrialFrom from "@/components/freeTrial/freeTrialFrom";
import SectionHeader from "@/components/shared/sectionHeader/page";

export const metadata = {
  title: "Free Trial - JewellryRetouch24",
  description: "Sign up for a free trial of JewellryRetouch24's professional jewelry retouching services. Experience the quality of our retouching solutions at no cost.",
};
export default function FreeTrial() {
  return (
    <div className="relative container mx-auto  lg:px-10 sm:px-6 px-5  ">
      <SectionHeader lable='Free Trial' title='Before to use our service, Try us ?' shotDetails='Experience our expertise with a free trial. Test our services with no commitment—discover the impact of professional photo editing on your visuals.' />
      <FreeTrialFrom />
    </div>
  );
}
