import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center bg-gray-700 lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-24 lg:flex-col lg:rounded-r-3xl">
        <div>
          <Image src="/nav-logo.svg" width="72" height="72" alt="logo" className="cursor-pointer lg:w-full" />
        </div>

        <div className="flex items-center lg:flex-col">
          <div className="cursor-pointer mr-6 lg:mr-0 lg:mb-6">
            <Image src="/icon-moon.svg" width="20" height="20" alt="dark mode moon" />
          </div>

          <div className="border-r border-solid border-gray-600 h-18 lg:border-b lg:w-24 lg:border-r-0 lg:h-0" />

          <div>
            <Image src="/avatar.jpg" width="32" height="32" alt="avatar image"
              className="cursor-pointer rounded-2xl mx-6 lg:my-6 lg:w-auto lg:h-auto lg:rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  )
}