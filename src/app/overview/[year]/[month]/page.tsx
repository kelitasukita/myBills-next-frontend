
import Image from "next/image";
import Link from "next/link";

// import { SubmitHandler, useForm } from "react-hook-form";
import { ExpensesService } from "@/services/ExpensesService";
import EmptyInvoice from "../../../components/EmptyInvoice";
import InvoiceItem, { InvoiceProps } from "../../../components/InvoiceItem";

// Nosso componente de tela:
export default async function Overview({ params }: { params: { year: number, month: number } }) {

  const expenses = await new ExpensesService().listUnpaid(params.year, params.month);
  const paidExpenses = await new ExpensesService().listPaid(params.year, params.month);

  //------------------------------------REACT HOOK FORM--------------------------------------
  // const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // const onSubmit: SubmitHandler<FormData> = (data) => {
  //   console.log(data, 'teste');
  // }

  return (

    <main className="w-full h-screen">

      <article className="w-11/12 mx-auto mb-12 lg:my-16 lg:mt-16 lg:w-736">
        <div className="flex justify-between items-center pt-18 mt-10 lg:pt-8">
          <div>
            <h2 className="text-gray-800 heading-m mb-1">Invoices</h2>
            <div className="text-gray-400 main-variant mt-2">
              <span className="md:hidden">{expenses.data.length} invoices</span>
              <span className="hidden md:inline">There are {expenses.data.length} unpaid invoices</span>
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
              <div className="cursor-pointer flex justify-end items-center w-90 bg-violet-500 hover:bg-violet-400 hover:transition hover:duration-400 rounded-full p-1.5"
              // onClick={() => setOpenModal(true)}
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

        </div>
      </article >
      {/* <HeaderOverview totalInvoices={expenses.length} /> */}

      {expenses.data.map((expense: InvoiceProps) => (
        <Link key={expense.id} href={`/invoice-status/${expense.id}`}>
          <InvoiceItem invoice={expense} />
        </Link>
      ))}

      {paidExpenses.data.map((expense: InvoiceProps) => (
        <Link key={expense.id} href={`/invoice-status/${expense.id}`}>
          <InvoiceItem invoice={expense} />
        </Link>
      ))}

      {expenses.data.length === 0 && (<EmptyInvoice />)}
    </main>
  )
}
