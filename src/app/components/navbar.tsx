import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-700 lg:h-screen lg:w-26 lg:flex-col lg:justify-between lg:rounded-r-3xl">
      <div className="">
        <Image src="/nav-logo.svg" width="72" height="72" alt="logo" className="lg:w-full" />
      </div>

      <div className="flex items-center lg:flex-col">
        <div className="mr-6 lg:mr-0 lg:mb-6">
          <Image src="/icon-moon.svg" width="20" height="20" alt="dark mode moon" />
        </div>

        <div className="border-r border-solid border-gray-600 h-18 lg:border-b lg:w-26 lg:border-r-0 lg:h-0" />

        <div>
          <Image src="/avatar.jpg" width="32" height="32" alt="avatar image"
            className="rounded-2xl mx-6 lg:my-6 lg:w-10 lg:h-10 lg:rounded-full" />
        </div>
      </div>
    </nav>
  )
}