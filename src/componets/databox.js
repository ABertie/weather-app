"use client"

import InfoBox from "./infobox"

export default function DataBox(props) {
    return (
        <div className="relative grid grid-cols-2 auto-rows-fr gap-3 p-4 text-primary-dark">
            {/* pt-20 pb-40 */}

                <InfoBox icon="sun" titel="Sun cycle" text={"Sunrise: " + new Date(props.response.city.sunrise*1000).toUTCString().slice(16,22) + " Sunset: " + new Date(props.response.city.sunset*1000).toUTCString().slice(16,22)}/>

                <InfoBox icon="wind" titel="Wind" value={props.response.list[0].wind.speed + " m/s"} text={<i className="fa-solid fa-arrow-down" style={{transform: `rotate(${props.response.list[0].wind.deg}deg)`}}></i>}/>

                <InfoBox icon="droplet" titel="Rainfall" value={props.response.list[0].rain ? props.response.list[0].rain["3h"] + " mm" : "0 mm"} text="The last 3 hours"/>

                <InfoBox icon="bars-staggered" titel="Humidity" value={props.response.list[0].main.humidity + "%"} />

                <InfoBox icon="temperature-half" titel="Feels like" value={Number.parseFloat(props.response.list[0].main.feels_like - 273.15).toFixed(2) + "º"} text="Similar to the actyal temperature" />

                <InfoBox icon="eye" titel="Visibility" value={props.response.list[0].visibility / 1000 + " km"}/>
            </div>
    )
}