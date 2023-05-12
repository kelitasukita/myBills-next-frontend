import Image from "next/image";


export default function EmptyInvoice() {
  return (
    <>
      <main className="flex flex-col justify-center items-center w-2/3 mx-auto mt-24">
        <Image src="/illustration-empty.svg" alt="image says it is empty" width="194" height="160" />
        <h1 className="heading-m px-2 text-gray-800 mt-11 text-center">There is nothing here</h1>
        <p className="body-variant text-gray-400 text-center mt-6 px-4 py-2">Create an invoice by clicking the <span className="font-bold">New</span> button and get started</p>
      </main>
    </>


  )
}