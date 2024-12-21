import Hero from '../../components/hero';
import AboutSection from '../../layout/pageLayout/aboutSection';

const About = () => {
    return (
        <div>
            <Hero heading="About Us" showButtons showParagraph />
            <AboutSection />
        </div>
    );
};

export default About;