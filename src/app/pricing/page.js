
import PricingCardsConatiner from "@/components/pricing/pricingCardsConatiner";
import SectionHeader from "@/components/shared/sectionHeader/page";
export const metadata = {
  title: "Pricing - JewellryRetouch24",
  description: "View JewellryRetouch24's pricing plans for professional jewelry retouching services. Choose the plan that best fits your needs and budget.",
};
export default function Priceing() {
  return (
    <div className="relative container mx-auto  lg:px-10 sm:px-6 px-5  ">
      <SectionHeader lable='Pricing Table' title='Our Pricing Plan' shotDetails='For transparent pricing that fits your needs, explore our service packages. Affordable rates, quality edits—unlock the potential of your visuals with us.' />
      <PricingCardsConatiner />
    </div>
  );
}
