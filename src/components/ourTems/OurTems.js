import OurTems from "../shared/card/ourTems"
import SectionHeader from "../shared/sectionHeader/page"

const OuseTems = () => {
    return (
        <section className="my-5">
            <SectionHeader lable='Our Articles' title='Our  Office' shotDetails='Meet the talented individuals who drive our vision forward, bringing diverse expertise and passion to every project' />
            <div className="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-5 2xl:px-20 xl:px-0 lg:px-10 md:px-0 sm:px-10 ">
                <OurTems name='MD MOSTAFIZUR RAHMAN' position=' (CEO)' 
                img={'https://i.ibb.co/5X3VpJC/msadfoasdfasd.jpg'}
                content={`
                Hello, My name is Mostafizur Rahman! I'm a freelance graphics designer. I have a strong passion for the creativity and discipline that goes into graphics design. Keeping in mind scalability and creative design. I've worked with companies of all shapes and sizes, so contact me if.
                `}
                />
                <OurTems name='MUHAMMAD HASAN' position=' (FOUNDER)' 
                img={'https://i.ibb.co/QNdmkNV/0365212a-aec5-4b1b-a0a3-51ebca371ba2.jpg'}
                content=" We're proud to introduce you to the visionary behind JewelleryRetouch24, Muhammad Hasan. With a passion for both jewelry and photography, Muhammad Hasan founded JewelleryRetouch24 with the goal of revolutionizing the way jewelry is presented online."
        
            
                />
                <OurTems name='OUR TEAMS'
                content="
                At JewelleryRetouch24, we have assembled a team of talented professionals who are passionate about jewelry and photography. Our dedicated team members work tirelessly to ensure that your retouching needs are met with precision and care.  "

                img={'https://i.ibb.co/mv75KbL/7adf2890-ff18-4725-aef8-1f9937ca63be.jpg'}
                />
            </div>
        </section>
    )
}
export default OuseTems

