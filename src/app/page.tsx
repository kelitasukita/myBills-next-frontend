
export default function Home() {
  return (
    <>
      <main className="">
        <div>
          <h1>my.bill$</h1>
        </div>
        <div>
          <h2>Choose your login</h2>
        </div>
        <div>
          <button>Login with google</button>
        </div>
        <div>
          <p>or</p>
        </div>
        <div>
          <label>Your email:</label>
          <input type="email" />
          <label>Your Password:</label>
          <input type="password" />
        </div>
        <button>Login</button>
      </main>
    </>
  )
}
