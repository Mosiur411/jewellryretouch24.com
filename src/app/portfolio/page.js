import PortfolioImageContainer from "@/components/portfolio/PortfolioImageContainer";
import SectionHeader from "@/components/shared/sectionHeader/page";

export const metadata = {
    title: "Portfolio - JewellryRetouch24",
    description: "Explore JewellryRetouch24's portfolio of stunning jewelry retouching projects. See examples of our work and discover the quality of our retouching solutions.",
  };
  
export default function page() {
    return (
        <div className="relative container mx-auto  lg:px-10 sm:px-6 px-5  ">
            <SectionHeader lable='Our Portfolio' title='Explore Our Awesome Portfolio' shotDetails='A quality service ensures Quality production. We have 12 years experience in this field and our experts are ready for work.' />

            <PortfolioImageContainer />
        </div>
    )
}
