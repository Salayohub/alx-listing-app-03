import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/OrderCancellation";


 function BookingPage() {
  const bookingDetails = {
 propertyName: "Villa Arrecife Beach House",
  price: 7500,
  bookingFee: 65,
  totalNights: 3,
  startDate: "24 August 2024",
  image: "/asset/image5.png",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
        <CancellationPolicy />
      </div>
    </div>
  );
}

export default BookingPage;
