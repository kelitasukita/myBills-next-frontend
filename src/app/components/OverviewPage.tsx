'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

function getSize() {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
  return 0;
}

export default function Overview() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(getSize());
      console.log(getSize());
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <div className="relative">

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

          <div>
            <div className="absolute top-6 md:top-8 right-5 md:right-10 flex flex-col py-4 pl-4 justify-around w-40 h-28 bg-white shadow-md rounded-lg">
              <label className="flex justify-start items-center heading-s text-gray-800">
                < input type="checkbox" className="mr-3 appearance-none w-4 h-4 hover:border hover:border-violet-600 bg-violet-100 rounded-sm" />
                Draft
              </label>
              <label className="flex justify-start items-center heading-s text-gray-800">
                < input type="checkbox" className="mr-3 appearance-none w-4 h-4 hover:border hover:border-violet-600 bg-violet-100 rounded-sm" />
                Pending
              </label>
              <label className="flex justify-start items-center heading-s text-gray-800">
                < input type="checkbox" className="mr-3 appearance-none w-4 h-4 hover:border hover:border-violet-600 bg-violet-100 rounded-sm" />
                Paid
              </label>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="flex justify-end items-center w-90 bg-violet-500 rounded-full p-1.5">
              <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full " >
                <Image className="" src="/icon-plus.svg" alt="plus signal" width="12" height="12" />
              </div>
              <div>
                <p className="text-sm text-white font-bold ml-1 ">
                  {width > 639
                    ?
                    (<span>New Invoice</span>)
                    :
                    (<span>New</span>)
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </article>
  )

}
