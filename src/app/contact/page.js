import ContactFrom from "@/components/contact/contactFrom";
import ContactInfo from "@/components/contact/contactInfo";
import SectionHeader from "@/components/shared/sectionHeader/page";
export const metadata = {
  title: "Contact Us - Photoeditspecialist",
  description: "Get in touch with Photoeditspecialist for inquiries, collaborations, or to learn more about our professional jewelry retouching services.",
};

export default function Contact() {
  return (
    <div className="relative container mx-auto  lg:px-10 sm:px-6 px-5  ">
      <SectionHeader lable='Contact us' title='Get in touch, With Us' shotDetails='Reach out to us for personalized assistance. Contact our team for inquiries, collaborations, or any support you may need. We are here for you.' />
      <ContactInfo />
      <ContactFrom />
    </div>
  );
}
// We’d love to hear from you