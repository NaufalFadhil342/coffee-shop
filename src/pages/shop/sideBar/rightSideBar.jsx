import Hero from "../../../components/hero";
import ShopSideBar from "../../../layout/shop-layout/sidebar/shopSideBar";

const RightSideBar = () => {
    return (
        <div>
            <Hero heading="Shop Right Side Style" showButtons={false} showParagraph />
            <ShopSideBar leftSide={false} />
        </div>
    );
};

export default RightSideBar;