import Hero from "../../components/hero";
import GallerySection from "../../layout/pageLayout/gallerySection";

const OurGallery = () => {
    return (
        <div>
            <Hero heading="Our Gallery" showButtons showParagraph />
            <GallerySection />
        </div>
    );
};

export default OurGallery;