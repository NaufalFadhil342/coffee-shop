import Hero from "../../../components/hero";
import ShopGrid from "../../../layout/shop-layout/grid/shopGrid";

const GridShop = () => {
    return (
        <div className="w-full h-auto">
            <Hero heading="Shop Grid Style" showButtons={false} showParagraph />
            <ShopGrid />
        </div>
    );
};

export default GridShop;