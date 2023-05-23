import HeaderOverview from "../components/HeaderOverview";
import InvoiceItem from "../components/InvoiceItem";
import Navbar from "../components/navbar";
import EmptyInvoice from "../components/emptyInvoice";

export default function Overview() {
  return (
    <div className="lg:flex">
      <Navbar />
      <div className="lg:w-736 mx-auto">
        <HeaderOverview />
        <InvoiceItem />
        {/* <EmptyInvoice /> */}
      </div>
    </div>
  )
}
