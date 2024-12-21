import Hero from "../../../components/hero";
import { MyCart as Cart } from '../../../layout/shopPage/myCart';

const MyCart = () => {
    return (
        <div>
            <Hero heading="My Cart" showButtons={false} showParagraph={false} />
            <Cart />
        </div>
    );
};

export default MyCart