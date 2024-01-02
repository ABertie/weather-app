"use client"

export default function CityWeatherBig(props) {
    return (
        <div className="text-center text-primary-dark p-12">
            <h2 className="text-3xl">{props.city.name}</h2>
            <p className="text-7xl font-thin">{Math.round(props.now.main.temp - 273.15)}&ordm;</p>
            <p className="capitalize font-semibold text-secondary-dark text-lg">{props.now.weather[0].description}</p>
            <p className="flex gap-2 justify-center font-semibold text-lg">
                <span>H:{Math.round(props.now.main.temp_max - 273.15)}&ordm;</span>
                <span>L:{Math.round(props.now.main.temp_min - 273.15)}&ordm;</span>
            </p>
        </div>
    )
}