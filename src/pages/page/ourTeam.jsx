import Hero from "../../components/hero";
import TeamSection from "../../layout/pageLayout/teamSection";

const OurTeam = () => {
    return (
        <div>
            <Hero heading="Our Team" showButtons showParagraph />
            <TeamSection />
        </div>
    );
};

export default OurTeam;