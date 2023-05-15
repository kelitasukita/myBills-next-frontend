import Image from "next/image";

export default function GoBackBtn() {
  return (
    <button className="flex justify-start items-center float-left w-1/3 mt-3 py-5 mb-3">
      <Image src="/icon-arrow-left.svg" alt="left arrow" width="7" height="10" />
      <p className="heading-s ml-7">Go back</p>
    </button>
  )
}