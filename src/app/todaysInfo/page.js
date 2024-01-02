"use client"

import CityWeatherSmall from "@/componets/citywethersmall";
import ForecastBox from "@/componets/forcastbox";
import useAxios from "@/hooks/useAxios";

export default function TodaysInfo() {
  const { response, error, loading } = useAxios("55.59960356249564", "12.20061405218572")
  
  console.log(response.list && response);
  
  return (
    <>
      {error && <p>{error}</p>}
      {!loading ? 
      <>
        <CityWeatherSmall city={response.city} now={response.list[0]}/>
        <ForecastBox response={response} today={true}/>
      </>
      : <div className="flex justify-center pt-20">
        <i class="fa-solid fa-snowflake fa-spin fa-spin-reverse text-[3rem] text-primary-dark"></i>
      </div>}
    </>
  )
}