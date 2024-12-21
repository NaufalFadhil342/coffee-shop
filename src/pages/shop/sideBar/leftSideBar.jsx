import Hero from '../../../components/hero';
import ShopSideBar from '../../../layout/shop-layout/sidebar/shopSideBar';

const LeftSideBar = () => {
    return (
        <div className="w-full h-auto">
            <Hero heading="Shop Left Side Style" showButtons={false} showParagraph />
            <ShopSideBar leftSide={true} />
        </div>
    );
};

export default LeftSideBar;