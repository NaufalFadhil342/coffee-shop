import Hero from "../../components/hero";
import ServiceSection from "../../layout/pageLayout/serviceSection";

const OurServices = () => {
    return (
        <div>
            <Hero heading="Our Services" showButtons showParagraph />
            <ServiceSection />
        </div>
    );
};

export default OurServices;