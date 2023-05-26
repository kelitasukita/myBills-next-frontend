import Button from "../components/Button";
import GoBackBtn from "../components/GoBackBtn";

export default function InvoiceStatus() {
  return (
    <main className="lg:flex">
      <section className="flex flex-col w-11/12 lg:w-736 mx-auto mt-4 md:mt-6">
        <GoBackBtn />
        <article className="flex justify-between items-center w-full mx-auto p-6 rounded-lg bg-white ">
          <div className="w-full flex justify-between items-center md:justify-start">
            <span className="body-variant text-gray-400 md:mr-5">Status</span>
            <div className="flex justify-center items-center w-26 h-11 bg-orange-500 rounded-md bg-opacity-10">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <span className="heading-s ml-2 rounded-md text-orange-400">Pending</span>
            </div>
          </div>
          <div className="hidden md:flex">
            <Button textColor="text-gray-400" bgColor="bg-gray-200" name="Edit" />
            <Button textColor="text-gray-100" bgColor="bg-red-500" name="Delete" />
            <Button textColor="text-gray-100" bgColor="bg-violet-500" name="Mark as Paid" />
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
          <div className="flex justify-between px-6 items-center mt-8 mb-4 h-20 rounded-lg  bg-gray-700">
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