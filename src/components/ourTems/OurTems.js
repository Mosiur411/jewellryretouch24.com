import OurTems from "../shared/card/ourTems"
import SectionHeader from "../shared/sectionHeader/page"

const OuseTems = () => {
    return (
        <section className="my-5">
            <SectionHeader lable='Our Articles' title='Our  Teams' shotDetails='Meet the talented individuals who drive our vision forward, bringing diverse expertise and passion to every project' />
            <div className="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-5 2xl:px-20 xl:px-0 lg:px-10 md:px-0 sm:px-10 ">
                <OurTems name='Mosiur Islam' position='CEO' />
                <OurTems name='Rokon Khan' position='FOUNDER' />
                <OurTems name='Masud Rana' position='DESIGNER' />

            </div>
            <h2>Lorem100 </h2>
        </section>
    )
}
export default OuseTems