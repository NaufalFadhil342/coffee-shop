import Hero from '../../components/hero';
import ReservationSection from '../../layout/reservationLayout/reservation/reservationSection';

const Reservation = () => {
    return (
        <div>
            <Hero heading="Reservation Form" showButtons={false} showParagraph={false} arrowBottom />
            <ReservationSection />
        </div>
    );
};

export default Reservation;