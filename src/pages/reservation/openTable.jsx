import Hero from "../../components/hero";
import BookTable from "../../layout/reservationLayout/bookTable";

const OpenTable = () => {
    return (
        <div>
            <Hero heading="Book a Table" showButtons={false} showParagraph={false} arrowBottom />
            <BookTable />
        </div>
    );
};

export default OpenTable;