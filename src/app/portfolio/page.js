import PortfolioImageContainer from "@/components/portfolio/PortfolioImageContainer";
import SectionHeader from "@/components/shared/sectionHeader/page";


export default function page() {
    return (
        <>
            <SectionHeader lable='Our Portfolio' title='Explore Our Awesome Portfolio' shotDetails='A quality service ensures Quality production. We have 12 years experience in this field and our experts are ready for work.' />

            <PortfolioImageContainer />
        </>
    )
}
