"use client"

import { useState } from "react"
import ForecastList from "./forecastlist"
import DataBox from "./databox"
import NavBar from "./navbar"

export default function ForecastBox(props) {  
    const [week, setWeek] = useState(false)

    function HourlyClickHadler() {
        setWeek(false)
    }

    function WeeklyClickHadler() {
        setWeek(true)
    }

    return (
        <div className={`${props.today === true ? "relative" : "absolute"} right-0 left-0 bottom-0 overflow-hidden rounded-t-[2.5rem] backdrop-blur-xl ring ring-indigo-dark/30`} >
            
            <div className="absolute h-full w-full rounded-t-[2.5rem] bg-gradient-to-br from-indigo-dark to-denim-dark opacity-60 border-t border-secondary-dark "></div>

            <div className="relative flex justify-between w-full px-6 pt-6 rounded-t-[2.5rem] text-secondary-dark border-b border-quaternary-dark shadow-[0px_1px_0px_var(--tw-shadow-color)] shadow-secondary-light">
                <button onClick={HourlyClickHadler}>Hourly Forecast<span className={`block h-0.5 w-full ${week === false ? "bg-gradient-to-r from-transparent via-secondary-dark" : ""}`}></span></button>
                <button onClick={WeeklyClickHadler}>Weekly Forecast<span className={`block h-0.5 w-full ${week === true ? "bg-gradient-to-r from-transparent via-secondary-dark" : ""}`}></span></button>
            </div>
            
            <ForecastList week={week} list={props.response.list}/>
            {props.today === true ? <DataBox response={props.response} /> : ""}

            <NavBar />

        </div>
    )
}