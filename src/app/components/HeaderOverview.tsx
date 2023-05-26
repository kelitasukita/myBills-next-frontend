'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


function getSize() {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
  return 0;
}

export default function HeaderOverview() {
  const [width, setWidth] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWidth(getSize());
      console.log(getSize());
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleNewInvoice = (e) => {
  //   console.log("clicou");
  //   return <Link href="/add-invoice" />
  // }

  return (
    <article className="flex justify-between items-center w-11/12 mx-auto mt-8 sm:mt-16 lg:mt-20 lg:w-full">
      <div>
        <h2 className="text-gray-800 heading-m mb-1">Invoices</h2>
        <div className="text-gray-400 body-variant mt-3">
          {width > 640
            ?
            (<span>There are 7 total invoices</span>)
            :
            (<span> 7 invoices</span>)
          }
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative cursor-pointer">

          <div className="flex justify-between items-center mr-6 md:mr-10">
            <p className="text-base font-bold text-gray-800 leading-4 mr-4 text-left">
              {width > 640
                ?
                (<span>Filter by status</span>)
                :
                (<span>Filter</span>)
              }
            </p>
            <Image src="/icon-arrow-down.svg" alt="down arrow" width="12" height="12" />
          </div>

          {/*------------------------------------- DROPDOWN MENU -------------------------------- */}
          {/* <div className="">
            <div className="absolute top-6 md:top-8 right-5 md:right-10 flex flex-col py-4 pl-4 justify-around w-40 h-28 bg-white shadow-md rounded-lg shrink-0">
              <label className="flex justify-start items-center heading-s text-gray-800 cursor-pointer">
                < input type="checkbox" className="cursor-pointer mr-3 relative appearance-none w-4 h-4 hover:border hover:border-violet-600 bg-violet-100 rounded-sm focus:outline-none checked:bg-violet-500 after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-center after:bg-no-repeat after:bg-[length:10px] checked:after:bg-[url('../../public/checked.svg')]" />
                Draft
              </label>
              <label className="flex justify-start items-center heading-s text-gray-800 cursor-pointer">
                < input type="checkbox" className="cursor-pointer mr-3 relative appearance-none w-4 h-4 hover:border hover:border-violet-600 bg-violet-100 rounded-sm focus:outline-none checked:bg-violet-500 after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-center after:bg-no-repeat after:bg-[length:10px] checked:after:bg-[url('../../public/checked.svg')]" />
                Pending
              </label>
              <label className="flex justify-start items-center heading-s text-gray-800 cursor-pointer" >
                < input type="checkbox" className="cursor-pointer mr-3 relative appearance-none w-4 h-4 hover:border hover:border-violet-600 bg-violet-100 rounded-sm focus:outline-none checked:bg-violet-500 after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-center after:bg-no-repeat after:bg-[length:10px] checked:after:bg-[url('../../public/checked.svg')]" />
                Paid
              </label>
            </div>
          </div> */}
        </div>

        <div>
          <Link href="/add-invoice">
            <div
              className="cursor-pointer flex justify-end items-center w-90 bg-violet-500 hover:bg-violet-400 hover:transition hover:duration-400 rounded-full p-1.5"
            >
              <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full " >
                <Image className="" src="/icon-plus.svg" alt="plus signal" width="12" height="12" />
              </div>
              <div>
                <p className="text-xs text-white font-bold pl-3 pr-2 ">
                  {width > 639
                    ?
                    (<span>New Invoice</span>)
                    :
                    (<span>New</span>)
                  }
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </article>
  )

}
