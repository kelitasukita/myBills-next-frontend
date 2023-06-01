import HeaderOverview from "../components/HeaderOverview";
import InvoiceItem, { InvoiceProps } from "../components/InvoiceItem";
import EmptyInvoice from "../components/EmptyInvoice";
import Link from "next/link";

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
    <div className="lg:flex relative">
      <div className="lg:w-736 mx-auto">
        <HeaderOverview totalInvoices={expenses.length} />
        {expenses.map((expense: InvoiceProps) => (
          <Link key={expense.id} href={`/invoice-status/${expense.id}`}>
            <InvoiceItem invoice={expense} />
          </Link>
        ))}

        {expenses.length === 0 && (<EmptyInvoice />)}
      </div>
    </div>
  )
}
