import SectionHeader from "../shared/sectionHeader/page";
import HomeImageContainer from "./HomeImageContainer";

const HomeGridImage = () => {
  return (
    <div className="relative container mx-auto  lg:px-10 sm:px-6 px-5  ">
      <SectionHeader
        lable="Our Portfolio"
        title="Explore Our Awesome Portfolio"
        shotDetails="A quality service ensures Quality production. We have 12 years experience in this field and our experts are ready for work."
      />
      <HomeImageContainer />
    </div>
  );
};
export default HomeGridImage;
