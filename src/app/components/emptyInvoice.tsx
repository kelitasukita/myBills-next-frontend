import Image from "next/image";

export default function EmptyInvoice() {
  return (
    <>
      <main className="flex flex-col justify-center items-center w-52 md:w-60 h-72 md:h-84 mx-auto mt-24">
        <Image src="/illustration-empty.svg" alt="image says it is empty" width="194" height="160" />
        <h1 className="text-lg md:text-xl font-bold text-gray-800 mt-10 text-center">There is nothing here</h1>
        <p className="text-xs text-gray-400 text-center mt-6 px-2">Create an invoice by clicking the <span className="font-bold">New</span> button and get started</p>
      </main>
    </>


  )
}