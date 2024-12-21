import Hero from "../../../components/hero";
import { MyAccount as Account } from '../../../layout/shopPage/myAccount';

const MyAccount = () => {
    return (
        <div>
            <Hero heading="My Account" showButtons={false} showParagraph={false} />
            <Account />
        </div>
    );
};

export default MyAccount