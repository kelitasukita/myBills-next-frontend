import GoBackBtn from "../components/goBackBtn";
import Navbar from "../components/navbar";

export default function EditInvoice() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-white">
        <div>
          <GoBackBtn />
        </div>
        <article className="p-6">
          <header className="flex justify-start items-center">
            <h1 className="heading-m text-gray-800">Edit </h1>
            <strong className="heading-m text-gray-400 ml-2">#</strong>
            <p className="heading-m text-gray-800">Mortgage</p>
          </header>

          <form action="/" className="flex flex-col mt-12">
            <label className="body-variant text-gray-400 mb-4  ">Description</label>
            <input className="border border-gray-300 h-12 rounded-md p-4 mb-6" type="text" />

            <label className="body-variant text-gray-400 mb-4  ">Currency</label>
            <div className="flex justify-start items-center mb-8">
              <input className="appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-5 w-5 mr-1 " type="radio" name="currency" />
              <label>EUR</label>
              <input className="appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-5 w-5 mr-1 ml-4" type="radio" name="currency" />
              <label>BRL</label>
              <input className="appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-5 w-5 mr-1 ml-4" type="radio" name="currency" />
              <label>USD</label>
            </div>

            <label className="body-variant text-gray-400 mb-4  ">Value</label>
            <input className="border border-gray-300 h-12 rounded-md p-4 mb-6" type="number" />

            <label className="body-variant text-gray-400 mb-4  ">Due date</label>
            <input className="border border-gray-300 h-12 rounded-md p-4 mb-6" type="date" />

            <label className="body-variant text-gray-400 mb-4  ">Automatic Debit</label>
            <input className="appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-6 w-6 mb-6" type="checkbox" />

            <label className="body-variant text-gray-400 mb-4  ">Recurrent</label>
            <input className="appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-6 w-6 mb-6" type="checkbox" />

            <label className="body-variant text-gray-400 mb-4  ">Installments</label>
            <div className="flex justify-start items-center">
              <input className="border border-gray-300 h-12 w-20 rounded-md p-4 mb-6" type="number" />
              <span className="body-variant text-gray-400 text-center mx-2 h-10">of</span>
              <input className="border border-gray-300 h-12 w-20 rounded-md p-4 mb-6" type="number" />
            </div>

            <label className="body-variant text-gray-400 mb-4  ">Observation</label>
            <input className="border border-gray-300 h-12 rounded-md p-4 mb-6" type="text" />
          </form>
        </article>

        <div className="h-16 bg-line bg-gradient-to-b from-transparent to-gray-200" />

        <footer className="flex justify-between items-center w-full p-6 bg-white">
          <button className="heading-s text-gray-400 py-5 px-6 bg-gray-100 rounded-full">Cancel</button>
          <button className="heading-s text-white py-5 px-6 bg-violet-500 rounded-full">Save Changes</button>
        </footer>
      </div>
    </>
  )
}