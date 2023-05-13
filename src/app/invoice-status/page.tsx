import Image from "next/image";
import GoBackBtn from "../components/goBackBtn";
import Navbar from "../components/navbar";

export default function InvoiceStatus() {
  return (
    <>
      <Navbar />
      <GoBackBtn />

      <article className="flex justify-between items-center w-11/12 mx-auto p-6 rounded-lg bg-white">
        <span className="body-variant text-gray-400">Status</span>
        <div className="flex justify-center items-center w-26 h-11 mr-0 bg-orange-500 rounded-md bg-opacity-10 sm:mt-0 sm:m-auto">
          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
          <span className="heading-s ml-2 rounded-md text-orange-400">Pending</span>
        </div>
      </article>

      <main className=" bg-white w-11/12 mx-auto mt-4 p-6 rounded-lg">
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
      </main>

      <footer className="flex justify-between items-center w-full mt-14 p-6 bg-white">
        <button className="heading-s text-gray-400 py-5 px-6 bg-gray-100 rounded-full">Edit</button>
        <button className="heading-s text-white py-5 px-6 bg-red-500 rounded-full">Delete</button>
        <button className="heading-s text-white py-5 px-6 bg-violet-500 rounded-full">Mark as Paid</button>
      </footer>
    </>
  )
}