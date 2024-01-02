"use client"

export default function SmallForecast(props) {
  return (
    <li className="relative w-14 h-max shadow-lg rounded-full">
        <div className={`h-full w-14 absolute ${props.focus ? "bg-gradient-to-r from-pink-mid to-indigo-light opacity-60" : "opacity-80 bg-gradient-to-r from-indigo-mid to-indigo-dark"} rounded-full`}></div>
        <div className={`relative flex flex-col justify-center h-max w-[54px] items-center bg-gradient-to-br ${props.focus ? "from-indigo" : "from-denim-light"} rounded-full px-2 py-3 text-primary-dark m-px`}> 
            <p>{props.time}</p>
            <p className="flex flex-col items-center">
              <img src={props.icon} alt="" className="h-6 m-auto"/>
              <i className="fa-solid fa-arrow-down" style={{transform: `rotate(${props.deg}deg)`}}></i>
              <span>{props.speed}<span className="text-xs">m/s</span></span>
            </p>
            <p className="text-xl">{props.temp}&ordm;</p>
        </div>
    </li>
  )
}