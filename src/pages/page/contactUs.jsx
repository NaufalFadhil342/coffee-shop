import Hero from '../../components/hero';
import ContactSection from '../../layout/pageLayout/contactSection';

const ContactUs = () => {
    return (
        <div>
            <Hero heading="Contact Us" showButtons showParagraph />
            <ContactSection />
        </div>
    );
};

export default ContactUs;