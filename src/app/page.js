"use client"

import SmallForecast from "@/componets/smallforecast";
import useAxios from "@/hooks/useAxios"
import { useEffect } from "react";


export default function Home() {
  // const { response } = useAxios("12.157383", "55.613262")

  // useEffect(function() {
  //   console.log(response);
  // }, [])

  return (
    <main>
      <div className=" flex flex-col gap-2 py-4 hidden"> {/* denim */}
        <ul className=" flex gap-2 flex-wrap"> {/* denim */}

          <li className="w-20 h-20 bg-transparent rounded-full"></li>

          <li className="w-20 h-20 bg-primary-light rounded-full"></li>
          <li className="w-20 h-20 bg-secondary-light rounded-full"></li>
          <li className="w-20 h-20 bg-tertiary-light rounded-full"></li>
          <li className="w-20 h-20 bg-quaternary-light rounded-full"></li>

          <li className="w-20 h-20 bg-primary-dark rounded-full"></li>
          <li className="w-20 h-20 bg-secondary-dark rounded-full"></li>
          <li className="w-20 h-20 bg-tertiary-dark rounded-full"></li>
          <li className="w-20 h-20 bg-quaternary-dark rounded-full"></li>

          <li className="w-20 h-20 bg-gradient-to-br from-denim-light to-denim-dark rounded-full"></li>
          <li className="w-20 h-20 bg-gradient-to-r from-indigo-mid to-indigo-dark rounded-full"></li>
          <li className="w-20 h-20 bg-gradient-to-r from-blue-mid to-pink-mid rounded-full"></li>
          <li className="w-20 h-20 bg-gradient-to-b from-blue-light from-50% to-50% to-blue-dark rounded-full"></li>
          <li className="w-20 h-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-pink-light to-indigo-dark rounded-full"></li>
          <li className="w-20 h-20 bg-[conic-gradient(from_90deg,#612fab,transparent_37.5%,#612fab,transparent_87.5%,#612fab)] rounded-full"></li>

          <li className="w-20 h-20 bg-indigo rounded-full"></li>
          <li className="w-20 h-20 bg-denim rounded-full"></li>  
          <li className="w-20 h-20 bg-pink rounded-full"></li>
          <li className="w-20 h-20 bg-lavender rounded-full"></li>

        </ul>
        <div className="flex flex-wrap bg-gradient-to-br from-denim-light to-denim-dark p-4">
          <img src="/sun.svg" alt="" className="h-20"/>
          <img src="/moon.svg" alt="" className="h-20"/>
          <img src="/cloud.svg" alt="" className="h-20 w-20"/>
          <img src="/rectangle.svg" alt=""/>
          <img src="/back.svg" alt=""/>
          <img src="/front.svg" alt=""/>
          <img src="/house.svg" alt="" className="w-40 h-80 px-4 pb-6 bg-night-sky bg-center bg-cover"/>
        </div>
      </div>
      <SmallForecast temp="5" icon="/cloud.svg" rain="10" time="Now"/>
    </main>
  )
}


