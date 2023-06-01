import HeaderOverview from "../components/HeaderOverview";
import InvoiceItem, { InvoiceProps } from "../components/InvoiceItem";
import EmptyInvoice from "../components/EmptyInvoice";

async function getExpenses() {
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
        <HeaderOverview />
        {expenses.map((expense: InvoiceProps) => (
          <InvoiceItem key={expense.id} invoice={expense} />
        ))}

        {/* <EmptyInvoice /> */}
      </div>
    </div>
  )
}
