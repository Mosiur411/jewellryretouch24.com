import FreeTrialFrom from "@/components/freeTrial/freeTrialFrom";
import SectionHeader from "@/components/shared/sectionHeader/page";

export default function FreeTrial() {
  return (
    <>
      <SectionHeader lable='Free Trial' title='Before to use our service, Try us ?' shotDetails='Experience our expertise with a free trial. Test our services with no commitment—discover the impact of professional photo editing on your visuals.' />
      <FreeTrialFrom />
    </>
  );
}
