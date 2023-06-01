import { InvoiceProps } from "@/app/components/InvoiceItem";
import Button from "../../components/Button";
import GoBackBtn from "../../components/GoBackBtn";

export async function getInvoice(invoiceId: string) {
  const data = await fetch('http://192.168.178.243:3333/expenses/' + invoiceId, { cache: 'no-store' });

  if (!data.ok) {
    throw new Error('Failed to fetch data!');
  }

  return data.json();
}

// {invoiceId: string }
export default async function InvoiceStatus({ params }: { params: { invoiceId: string } }) {
  const invoice: InvoiceProps = await getInvoice(params.invoiceId);

  return (
    <main className="lg:flex">
      <section className="flex flex-col w-11/12 lg:w-736 mx-auto mt-4 md:mt-6">
        <GoBackBtn />
        <article className="flex justify-between items-center w-full mx-auto p-6 rounded-lg bg-white ">
          <div className="w-full flex justify-between items-center md:justify-start">
            <span className="body-variant text-gray-400 md:mr-5">Status</span>
            {invoice.paid ?
              (
                <div className="flex justify-center items-center w-26 h-11 bg-green-400 rounded-md bg-opacity-10">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="heading-s ml-2 rounded-md text-green-400">Paid</span>
                </div>
              ) :
              (
                <div className="flex justify-center items-center w-26 h-11 bg-orange-500 rounded-md bg-opacity-10">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span className="heading-s ml-2 rounded-md text-orange-400">Pending</span>
                </div>
              )
            }
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
              {invoice.description}
            </h2>
            <div>
              <p className="body-variant text-gray-400 mt-8 mb-4 ">Due Date</p>
              <span className="heading-s text-gray-800 ">{invoice.dueDate}</span>
            </div>
            <div>
              <p className="body-variant text-gray-400 mt-8 mb-4 ">Type of payment</p>
              <span className="heading-s text-gray-800 ">{invoice.automaticDebit ? 'Automatic Debit' : 'Manual Payment'}</span>
            </div>
            <div>
              <p className="body-variant text-gray-400 mt-8 mb-4 ">Recurrent</p>
              <span className="heading-s text-gray-800 ">{invoice.recurrent ? 'Yes' : 'No'}</span>
            </div>
            <div>
              <p className="body-variant text-gray-400 mt-8 mb-4 ">Installments</p>
              <span className="heading-s text-gray-800 ">{invoice.currentInstallment}/{invoice.installments}</span>
            </div>
            <div>
              <p className="body-variant text-gray-400 mt-8 mb-4 ">Observation</p>
              <span className="heading-s text-gray-800 ">{invoice.obs}</span>
            </div>
          </section>
          <div className="flex justify-between px-6 items-center mt-8 mb-4 h-20 rounded-lg  bg-gray-700">
            <span className="body-variant text-white">Value</span>
            <strong className="heading-l text-white">{invoice.paid || invoice.currency === 'EUR' ? '€' : 'R$'} {invoice.value}</strong>
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