import Image from "next/image";

export default function GoBackBtn() {
  return (
    <button className="cursor-pointer flex justify-start items-center float-left w-1/3 mt-3 py-5 hover:">
      <Image src="/icon-arrow-left.svg" alt="left arrow" width="7" height="10" />
      <p className="heading-s text-gray-800 hover:text-gray-400 ml-7">Go back</p>
    </button>
  )
}