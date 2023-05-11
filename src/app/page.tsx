
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

        <div className="flex justify-center items-center mt-6 w-full h-11 mx-auto border border-gray-300 border-solid rounded-md">
          <button>Login with google</button>
        </div>

        <div className="mt-7 w-full flex justify-center items-center">
          <div className="border-t border-gray-300 border-solid w-3/5" />
          <p className="mx-2">or</p>
          <div className="border-t border-gray-300 border-solid w-3/5" />
        </div>

        <div className="mt-7">
          <label>Your email:</label>
          <input type="email" className="w-full h-11 border border-gray-300 border-solid rounded-md mt-1 mb-4" />
          <label>Your Password:</label>
          <input type="password" className="w-full h-11 border border-gray-300 border-solid rounded-md mt-1" />
        </div>

        <button className="bg-violet-600 text-white mt-6 w-full h-11 mx-auto border border-gray-300 border-solid rounded-md">Login</button>
      </main>
    </div>
  )
}
