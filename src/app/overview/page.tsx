import AddInvoice from "../components/addInvoice";
import EditScreenModal from "../components/EditScreenModal";
import EmptyInvoice from "../components/emptyInvoice";
import Invoice from "../components/invoice";
import Navbar from "../components/navbar";


export default function Overview() {
  return (
    // <EditScreenModal />
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
