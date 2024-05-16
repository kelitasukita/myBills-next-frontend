import Image from "next/image";

export interface InvoiceProps {
  id: string;
  paid: boolean;
  description: string;
  dueDate: string;
  automaticDebit: boolean;
  recurrent: boolean;
  currentInstallment: number;
  installments: number;
  currency: string;
  obs: string;
  value: number;
}

export default function InvoiceItem({ invoice }: { invoice: InvoiceProps }) {
  const formatDate = (date: Date) => {

    const month = new Date(date.toDateString()).toLocaleDateString('en-us', { month: 'short' });

    return date.getDate() + ' ' + month + ' ' + date.getFullYear();
  }
  return (

    <article className="cursor-pointer grid grid-cols-3 grid-rows-3 mt-5 w-11/12 mx-auto h-32 p-6 bg-white rounded-lg shadow-md hover:border hover:border-violet-600 hover:border-solid md:grid md:grid-cols-5 md:grid-rows-1 md:h-18 md:justify-center md:items-center lg:w-736">
      <h2 className="heading-s text-gray-800 overflow-hidden truncate lg:h-5">
        <span className="text-gray-400 font-medium">#</span>
        {invoice.description}
      </h2>
      <span className="col-start-1 col-end-2 text-slate-400 body inline-block mt-4 md:col-start-3 md:col-end-4 md:mt-0">Due {formatDate(new Date(invoice.dueDate))}</span>
      <strong className="col-start-1 col-end-2 text-gray-800 heading-s mt-4 md:col-start-4 md:col-end-4 md:mt-0 md:text-center">{invoice.paid || invoice.currency === 'EUR' ? '€' : 'R$'} {invoice.value}</strong>

      {invoice.installments ?
      <span className="col-start-3 col-end-3 row-start-1 text-right text-slate-400 body md:col-start-2 md:text-center"> 
        {invoice.currentInstallment}/{invoice.installments}
      </span> :
      <span/> 
      } 

      {invoice.paid ?
        (
          <div className="col-start-3 col-end-3 row-start-2 row-end-3 flex justify-end items-center md:col-start-5 md:col-end-5 md:row-start-1 md:mt-0 md:justify-between">
            <div className="flex justify-center items-center w-26 h-11 mt-12 mr-0 bg-green-400 rounded-md bg-opacity-10 md:mt-0 md:m-auto">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="heading-s ml-2 rounded-md text-green-400">Paid</span>
            </div>
            <Image className="hidden md:block md:grid-start-5" src="/icon-arrow-right.svg" alt="arrow right" width="8" height="8" />
          </div>) :
        (
          <div className="col-start-3 col-end-3 row-start-2 row-end-3 flex justify-end items-center md:col-start-5 md:col-end-5 md:row-start-1 md:mt-0 md:justify-between">
            <div className="flex justify-center items-center w-26 h-11 mt-12 mr-0 bg-orange-500 rounded-md bg-opacity-10 md:mt-0 md:m-auto">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <span className="heading-s ml-2 rounded-md text-orange-400">Pending</span>
            </div>
            <Image className="hidden md:block md:grid-start-5" src="/icon-arrow-right.svg" alt="arrow right" width="8" height="8" />
          </div>
        )
      }
      {/* <div className="col-start-3 col-end-3 row-start-2 row-end-3 flex justify-end items-center md:col-start-5 md:col-end-5 md:row-start-1 md:mt-0 md:justify-between">
        <div className="flex justify-center items-center w-26 h-11 mt-12 mr-0 bg-gray-800 rounded-md bg-opacity-20 md:mt-0 md:m-auto">
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <span className="heading-s ml-2 rounded-md text-gray-800">Draft</span>
        </div>
        <Image className="hidden md:block md:grid-start-5" src="/icon-arrow-right.svg" alt="arrow right" width="8" height="8" />
      </div> */}
    </article>
  )
}