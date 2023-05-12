import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="text-center mb-1">
        <h1 className="text-gray-400 text-3xl font-bold">my.bill$</h1>
      </section>
      <main className="bg-white w-4/5 h-55vh m-auto rounded-lg shadow-lg p-6">

        <div className="text-center">
          <h2 className="text-lg text-gray-400 font-normal">Choose your login</h2>
        </div>

        <button className="flex justify-center items-center mt-6 w-full h-11 mx-auto border border-gray-300 border-solid rounded-md relative bg-transparent z-0 transition-colors before:rounded-md before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-google-btn before:transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
          <Image
            src="./google-48.svg"
            width={32}
            height={32}
            alt="google icon"
            className="mr-6 z-10 " />
          Login with google
        </button>


        <div className="mt-7 w-full flex justify-center items-center">
          <div className="border-t border-gray-300 border-solid w-3/5" />
          <p className="mx-2">or</p>
          <div className="border-t border-gray-300 border-solid w-3/5" />
        </div>

        <div className="mt-6">
          <label>Your email:</label>
          <input type="email" className="w-full h-11 border border-gray-300 border-solid rounded-md mt-1 mb-4" />
          <label>Your Password:</label>
          <input type="password" className="w-full h-11 border border-gray-300 border-solid rounded-md mt-1" />
        </div>

        <button className="bg-violet-600 text-white mt-6 w-full h-11 mx-auto border border-gray-300 border-solid rounded-md">Login</button>
      </main>
    </div >
  )
}
