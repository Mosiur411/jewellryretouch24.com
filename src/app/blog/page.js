import BlogsContainer from "@/components/blog/blogsContainer";
import SectionHeader from "@/components/shared/sectionHeader/page";
export const metadata = {
  title: "Blog - JewellryRetouch24",
  description: "Explore the latest articles and insights from JewellryRetouch24's blog. Learn about jewelry retouching tips, industry trends, and more.",
};
export default function Blog() {
  return (
    <>
      <SectionHeader lable='Our Articles' title='Our Awesome Articles for you' shotDetails='Dive into captivating articles that explore the latest trends, expert insights, and creative inspiration. Stay informed and inspired with our engaging and informative content' />
      <BlogsContainer />
    </>
  );
}
