import OverviewPage from "../components/OverviewPage";
import Invoice from "../components/invoice";
import Navbar from "../components/navbar";

export default function Overview() {
  return (
    <div className="lg:flex">
      <Navbar />
      <div className="lg:w-736 mx-auto">
        <OverviewPage />
        <Invoice />
        {/* <EmptyInvoice /> */}
      </div>
    </div>
  )
}
