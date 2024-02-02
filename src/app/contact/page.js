import ContactFrom from "@/components/contact/contactFrom";
import ContactInfo from "@/components/contact/contactInfo";
import SectionHeader from "@/components/shared/sectionHeader/page";

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