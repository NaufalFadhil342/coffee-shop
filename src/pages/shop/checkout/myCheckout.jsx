import Hero from "../../../components/hero";
import { MyCheckout as Checkout } from '../../../layout/shopPage/myCheckout';

const MyCheckout = () => {
    return (
        <div>
            <Hero heading="Checkout Order" showButtons={false} showParagraph={false} />
            <Checkout />
        </div>
    );
};

export default MyCheckout