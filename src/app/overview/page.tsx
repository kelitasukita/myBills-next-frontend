import AddInvoice from "../components/addInvoice";
import Invoice from "../components/invoice";
import Navbar from "../components/navbar";

export default function Overview() {
  return (
    <>
      <Navbar />
      <AddInvoice />
      <Invoice />
    </>
  )
}
