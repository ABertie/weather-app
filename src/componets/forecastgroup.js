"use client"

import { useEffect, useState } from "react"
import SmallForecast from "./smallforecast"

export default function ForecastGroup(props) {
    const [list, setList] = useState([])
    let kevin = 273.15

    useEffect(function () {
        setList(props.week === true ? props.res.list.map((object, i) => (object.dt_txt.slice(11, 13) == 12 || i === 0 ) && object) : props.res.list)
    }, [])
    
    console.log(list);

    return (
        <div className="relative overflow-hidden rounded-[3rem] backdrop-blur-2xl">
            <div className="absolute h-full w-full rounded-[3rem] bg-gradient-to-br from-denim-light to-denim-dark opacity-10"></div>
            <ul className="flex gap-2 px-4 pt-16 pb-28 rounded-[3rem] overflow-x-scroll">
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
        </div>
    )
}