"use client"

export default function CityWeatherSmall(props) {
    return (
        <div className="text-center text-primary-dark p-4">
            <h2 className="text-3xl">{props.city.name}</h2>
            <p className="capitalize font-semibold text-secondary-dark text-lg">{Math.round(props.now.main.temp - 273.15)}&ordm; | {props.now.weather[0].description}</p>
        </div>
    )
}