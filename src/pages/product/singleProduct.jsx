import Hero from "../../components/hero";
import { SingleProduct as ProductDetail } from '../../layout/productLayout';

const SingleProduct = () => {
    return (
        <div>
            <Hero heading="Single Product Style" showButtons={false} showParagraph />
            <ProductDetail />
        </div>
    );
};

export default SingleProduct