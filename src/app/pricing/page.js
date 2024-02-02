
import PricingCardsConatiner from "@/components/pricing/pricingCardsConatiner";
import SectionHeader from "@/components/shared/sectionHeader/page";

export default function Priceing() {
  return (
    <>
      <SectionHeader lable='Pricing Table' title='Our Pricing Plan' shotDetails='For transparent pricing that fits your needs, explore our service packages. Affordable rates, quality edits—unlock the potential of your visuals with us.' />
      <PricingCardsConatiner />
    </>
  );
}
