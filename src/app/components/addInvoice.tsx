'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

function getSize() {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
  return 0;
}

export default function AddInvoice() {
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
    <article className="flex justify-between items-center w-11/12 mx-auto mt-6 desktop:w-6-12 desktop:mx-auto desktop:w-730">
      <div>
        <h2 className="text-gray-800 heading-m mb-1 sm:text-4xl sm:leading-8 sm:-tracking-1 sm:font-bold " >Invoices</h2>
        <div className="text-gray-400 body-variant mt-1 sm:text-sm sm:eading-4.5 sm:-tracking-0.1 sm:font-medium">
          {width > 640
            ?
            (<span>There are 7 total invoices</span>)
            :
            (<span> 7 invoices</span>)
          }
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center mr-5">
          <p className="text-base font-bold text-gray-800 leading-4 mr-4 ">
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
          <div>
            <div className="flex justify-between items-center w-90 bg-violet-500 rounded-full p-1.5 sm:w-150 sm:h-48">
              <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full " >
                <Image className="" src="/icon-plus.svg" alt="plus signal" width="12" height="12" />
              </div>
              <div>
                <p className="text-sm text-white font-bold ml-1 sm:mt-1">
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
