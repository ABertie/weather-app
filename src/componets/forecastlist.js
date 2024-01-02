"use client"

import { useEffect, useState } from "react"
import SmallForecast from "./smallforecast"

export default function ForecastList(props) {
    const [list, setList] = useState([])
    let kevin = 273.15

    useEffect(function () {
        setList(props.week === true ? props.list.map((object, i) => (object.dt_txt.slice(11, 13) == 12 || i === 0 ) && object) : props.list)
    }, [props.week])

    return (
        <ul className={`flex gap-2 p-4 m-auto overflow-x-scroll relative `}>
            {/* ${with > viewWidth ? "justify-center" : ""} */}
            {list.map((object, i) => (object &&
                    <SmallForecast key={object.dt} 
                    focus={i === 0 ? true : false}
                    time={props.week === true ? i === 0 && "Today" || new Date(object.dt*1000).toUTCString().slice(0, 3).toUpperCase() : object.dt_txt.slice(11, 16)} 
                    icon={"/icons/" + object.weather[0].icon + ".svg"}
                    deg={object.wind.deg}
                    speed={Math.round(object.wind.speed)}
                    temp={Math.round(object.main.temp - kevin)} />
                ))}
        </ul>
    )
}