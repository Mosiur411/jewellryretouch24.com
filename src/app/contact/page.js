import ContactFrom from "@/components/contact/contactFrom";
import ContactInfo from "@/components/contact/contactInfo";
import SectionHeader from "@/components/shared/sectionHeader/page";
export const metadata = {
  title: "Contact Us - JewellryRetouch24",
  description: "Get in touch with JewellryRetouch24 for inquiries, collaborations, or to learn more about our professional jewelry retouching services.",
};

export default function Contact() {
  return (
    <>
      <SectionHeader lable='Contact us' title='Get in touch, With Us' shotDetails='Reach out to us for personalized assistance. Contact our team for inquiries, collaborations, or any support you may need. We are here for you.' />
      <ContactInfo />
      <ContactFrom />
    </>
  );
}
// We’d love to hear from you