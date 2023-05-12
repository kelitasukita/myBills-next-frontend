import Image from "next/image";

export default function Invoice() {
  return (
    <article className="grid grid-cols-3 grid-rows-3 mt-8 w-11/12 mx-auto h-32 p-6 bg-white rounded-lg shadow-md hover:border hover:border-violet-600 hover:border-solid sm:grid sm:grid-cols-5 sm:grid-rows-1 sm:h-72 sm:justify-center sm:items-center sm:mt-14 sm:px-6 desktop:mx-auto desktop:w-730">
      <h2 className="heading-s text-gray-800">
        <span className="text-gray-400 font-medium ">#</span>
        Mortgage
      </h2>
      <span className="col-start-1 col-end-2 text-slate-400 body inline-block mt-4 sm:col-start-2 sm:mt-0">Due 1 Aug 2023</span>
      <strong className="col-start-1 col-end-2 text-gray-800 heading-s mt-4 sm:col-start-4 sm:col-end-4 sm:mt-0 sm:text-center">$1,800.90</strong>

      <span className="col-start-3 col-end-3 row-start-1 text-right text-slate-400 body sm:col-start-3 sm:text-center">24/360</span>

      <div className="col-start-3 col-end-3 row-start-2 row-end-3 flex justify-end items-center sm:col-start-5 sm:col-end-5 sm:row-start-1 sm:mt-0 sm:justify-between">
        <div className="flex justify-center items-center w-26 h-10 mt-12 mr-0 bg-green-400 rounded-md bg-opacity-10 sm:mt-0 sm:m-auto">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span className="heading-s ml-2 rounded-md text-green-400">Paid</span>
        </div>
        <Image className="hidden sm:block sm:grid-start-5" src="/icon-arrow-right.svg" alt="arrow right" width="8" height="8" />
      </div>
    </article>
  )
}