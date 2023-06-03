import Link from "next/link";
import Image from "next/image";

import InvoiceItem, { InvoiceProps } from "../components/InvoiceItem";
import EmptyInvoice from "../components/EmptyInvoice";


export async function getExpenses() {
  const data = await fetch('http://192.168.178.243:3333/expenses', { cache: 'no-store' });

  if (!data.ok) {
    throw new Error('Failed to fetch data!');
  }

  return data.json();
}


export default async function Overview() {
  const expenses = await getExpenses();

  return (

    <main className="w-screen mx-auto">
      {/* <dialog open={} className="bg-black opacity-50 w-screen h-screen">
            <div className="">
              <h1>New Invoice</h1>
            </div>
          </dialog> */}
      <article className="flex justify-between items-center w-11/12 mx-auto mt-8 mb-12 md:mb-16 sm:mt-16 lg:mt-20 lg:w-736">

        <div>
          <h2 className="text-gray-800 heading-m mb-1">Invoices</h2>
          <div className="text-gray-400 body-variant mt-3">
            <span className="md:hidden">{expenses.length} invoices</span>
            <span className="hidden md:inline">There are {expenses.length} total invoices</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative cursor-pointer">

            <div className="flex justify-between items-center mr-6 md:mr-10">
              <p className="text-base font-bold text-gray-800 leading-4 mr-4 text-left">
                <span className="md:hidden">Filter</span>
                <span className="hidden md:inline">Filter by status</span>
              </p>
              <Image src="/icon-arrow-down.svg" alt="down arrow" width="12" height="12" />
            </div>

            {/*------------------------------------- DROPDOWN MENU -------------------------------- */}
            {/* <div className="">
              <div className="absolute top-6 md:top-8 right-5 md:right-10 flex flex-col py-4 pl-4 justify-around w-40 h-28 bg-white shadow-md rounded-lg shrink-0">
                <label className="flex justify-start items-center heading-s text-gray-800 cursor-pointer">
                  < input type="checkbox" className="cursor-pointer mr-3 relative appearance-none w-4 h-4 hover:border hover:border-violet-600 bg-violet-100 rounded-sm focus:outline-none checked:bg-violet-500 after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-center after:bg-no-repeat after:bg-[length:10px] checked:after:bg-[url('../../public/checked.svg')]" />
                  Draft
                </label>
                <label className="flex justify-start items-center heading-s text-gray-800 cursor-pointer">
                  < input type="checkbox" className="cursor-pointer mr-3 relative appearance-none w-4 h-4 hover:border hover:border-violet-600 bg-violet-100 rounded-sm focus:outline-none checked:bg-violet-500 after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-center after:bg-no-repeat after:bg-[length:10px] checked:after:bg-[url('../../public/checked.svg')]" />
                  Pending
                </label>
                <label className="flex justify-start items-center heading-s text-gray-800 cursor-pointer" >
                  < input type="checkbox" className="cursor-pointer mr-3 relative appearance-none w-4 h-4 hover:border hover:border-violet-600 bg-violet-100 rounded-sm focus:outline-none checked:bg-violet-500 after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-center after:bg-no-repeat after:bg-[length:10px] checked:after:bg-[url('../../public/checked.svg')]" />
                  Paid
                </label>
              </div>
            </div> */}
          </div>

          <div>
            <div
              className="cursor-pointer flex justify-end items-center w-90 bg-violet-500 hover:bg-violet-400 hover:transition hover:duration-400 rounded-full p-1.5"
            >
              <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full ">
                <Image className="" src="/icon-plus.svg" alt="plus signal" width="12" height="12" />
              </div>
              <div>
                <p className="text-xs text-white font-bold pl-3 pr-2 ">
                  <span className="md:hidden">New</span>
                  <span className="hidden md:inline">New invoice</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </article >
      {/* <HeaderOverview totalInvoices={expenses.length} /> */}

      {expenses.map((expense: InvoiceProps) => (
        <Link key={expense.id} href={`/invoice-status/${expense.id}`}>
          <InvoiceItem invoice={expense} />
        </Link>
      ))}

      {expenses.length === 0 && (<EmptyInvoice />)}
    </main>
  )
}
