import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-700">
      <div className="">
        <Image src="/nav-logo.svg" width="72" height="72" alt="logo" className="" />
      </div>

      <div className="flex items-center">
        <div className="mr-6">
          <Image src="/icon-moon.svg" width="20" height="20" alt="dark mode moon" />
        </div>

        <div className="border-r border-solid border-gray-600 h-18" />

        <div>
          <Image src="/avatar.jpg" width="32" height="32" alt="avatar image"
            className="rounded-2xl mx-6" />
        </div>
      </div>
    </nav>
  )
}