import Image from "next/image";
import Button from "../components/button";
import DeleteModal from "../components/DeleteModal";
import GoBackBtn from "../components/goBackBtn";
import Navbar from "../components/navbar";

export default function InvoiceStatus() {
  return (
    <main className="lg:flex">
      <Navbar />
      <section className="flex flex-col w-11/12 lg:w-736 mx-auto">
        <GoBackBtn />
        {/* <DeleteModal /> */}
        <article className="flex justify-between items-center w-full mx-auto p-6 rounded-lg bg-white">
          <span className="body-variant text-gray-400">Status</span>
          <div className="flex justify-center items-center w-26 h-11 mr-0 bg-orange-500 rounded-md bg-opacity-10 sm:mt-0 sm:m-auto">
            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
            <span className="heading-s ml-2 rounded-md text-orange-400">Pending</span>
          </div>
        </article>

        <article className=" bg-white w-full mx-auto mt-4 p-6 rounded-lg ">
          <section className="grid grid-cols-2 grid-rows-3 ">
            <h2 className="heading-s text-gray-800 mt-8">
              <strong className="text-gray-400">#</strong>
              Mortgage
            </h2>
            <div>
              <p className="body-variant text-gray-400 mt-8 mb-4 ">Due Date</p>
              <span className="heading-s text-gray-800 ">01-10-2023</span>
            </div>
            <div>
              <p className="body-variant text-gray-400 mt-8 mb-4 ">Type of payment</p>
              <span className="heading-s text-gray-800 ">Automatic Debit</span>
            </div>
            <div>
              <p className="body-variant text-gray-400 mt-8 mb-4 ">Recurrent</p>
              <span className="heading-s text-gray-800 ">Yes</span>
            </div>
            <div>
              <p className="body-variant text-gray-400 mt-8 mb-4 ">Installments</p>
              <span className="heading-s text-gray-800 ">24/360</span>
            </div>
            <div>
              <p className="body-variant text-gray-400 mt-8 mb-4 ">Observation</p>
              <span className="heading-s text-gray-800 ">This is an optional information</span>
            </div>
          </section>
          <div className="flex justify-around items-center mt-8 mb-4 h-20 rounded-lg  bg-gray-700">
            <span className="body-variant text-white">Value</span>
            <strong className="heading-l text-white">€ 1800.00</strong>
          </div>
        </article>
      </section>

      <footer className="flex justify-between items-center w-full mt-14 p-6 bg-white md:hidden">
        <Button textColor="text-gray-400" bgColor="bg-gray-200" name="Edit" />
        <Button textColor="text-gray-100" bgColor="bg-red-500" name="Delete" />
        <Button textColor="text-gray-100" bgColor="bg-violet-500" name="Mark as Paid" />
      </footer>
    </main>
  )
}