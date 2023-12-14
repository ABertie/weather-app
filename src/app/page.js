"use client"

import ForecastGroup from "@/componets/forecastgroup";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";

export default function Home() {
  const { response, error, loading } = useAxios("55.613262", "12.157383")
  const [week, setWeek] = useState(true)
  
  // console.log(response.list && response);
  
  return (
    <main className="bg-denim-light relative">
        {/* <ul className=" flex gap-2 flex-wrap"> 

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
        </ul> */}

        <img src="/house.svg" alt="" className="block absolute inset-0 bg-night-sky bg-cover bg-center h-screen pt-20"/>
        {!loading && 
        <div className="fixed inset-x-0 bottom-0">
          <ForecastGroup week={week} res={response}/>
        </div>}
    </main>
  )
}


