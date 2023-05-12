import AddInvoice from "../components/addInvoice";
import EmptyInvoice from "../components/emptyInvoice";
import Invoice from "../components/invoice";
import Navbar from "../components/navbar";

export default function Overview() {
  return (
    <>
      <Navbar />
      <AddInvoice />
      <Invoice />
      {/* <EmptyInvoice /> */}
    </>
  )
}
