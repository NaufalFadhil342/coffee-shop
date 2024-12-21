import Hero from "../../components/hero";
import SimpleMenuSection from "../../layout/menuLayout/simpleMenu";

const SimpleMenu = () => {
    return (
        <div>
            <Hero heading="Simple Menu" showButtons={false} showParagraph />
            <SimpleMenuSection />
        </div>
    );
};

export default SimpleMenu;