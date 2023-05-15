import AddInvoice from "../components/addInvoice";
import EmptyInvoice from "../components/emptyInvoice";
import Invoice from "../components/invoice";
import Navbar from "../components/navbar";

export default function Overview() {
  return (
    <div className="lg:flex">
      <Navbar />
      <div className="lg:w-736 mx-auto">
        <AddInvoice />
        <Invoice />
        {/* <EmptyInvoice /> */}
      </div>
    </div>
  )
}
