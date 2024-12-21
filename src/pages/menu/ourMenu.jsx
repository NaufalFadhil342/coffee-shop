import Hero from "../../components/hero";
import OurMenuSection from "../../layout/menuLayout/ourMenu";

const OurMenu = () => {
    return (
        <div>
            <Hero heading="Our Menu" showButtons={false} showParagraph />
            <OurMenuSection />
        </div>
    );
};

export default OurMenu;