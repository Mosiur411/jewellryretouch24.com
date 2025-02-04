import OurTems from "../shared/card/ourTems"
import SectionHeader from "../shared/sectionHeader/page"
import faunder from '/public/assect/image/ouroffice/faunder.jpg'
import ourtem from '/public/assect/image/ouroffice/ourtem.jpg'
import seo from '/public/assect/image/ouroffice/seo.jpg'

const OuseTems = () => {
    return (
        <section className="my-5">
            <SectionHeader lable='Our Articles' title='Our  Office' shotDetails='Meet the talented individuals who drive our vision forward, bringing diverse expertise and passion to every project' />
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-14  md:gap-32 2xl:px-20 xl:px-0 lg:px-10 md:px-0 sm:px-10 ">
                <OurTems name='MD MOSTAFIZUR RAHMAN' position=' (CEO)'
                    img={seo}
                    content={`
                Hello, My name is Mostafizur Rahman! I'm a freelance graphics designer. I have a strong passion for the creativity and discipline that goes into graphics design. Keeping in mind scalability and creative design. I've worked with companies of all shapes and sizes, so contact me if.
                `}
                />
                <OurTems name='MUHAMMAD HASAN' position=' (FOUNDER)'
                    img={faunder}
                    content="We're proud to introduce you to the visionary behind photoeditspecialist, Jahangir Alam. With a passion for both image and photography, Jahangir Alam founded photoeditspecialist with the gold of revolutionizing the way image is presented online."


                />
                <OurTems name='OUR TEAMS'
                    content="
               At photoeditspecialist, we have assembled a team of talented professionals who are passionate about image and photography. Our dedicated team members work tirelessly to ensure that your photoedit needs are met with precision and care."

                    img={ourtem} />
            </div>
        </section>
    )
}
export default OuseTems

