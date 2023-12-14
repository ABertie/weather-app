"use client"

export default function SmallForecast(props) {
  return (
    <li className="relative w-16 h-max shadow-lg rounded-full">
        <div className={`h-full w-16 absolute ${props.focus ? "bg-gradient-to-r from-pink-mid to-indigo-light opacity-60" : "opacity-80 bg-gradient-to-r from-indigo-mid to-indigo-dark"} rounded-full`}></div>
        <div className={`relative flex flex-col gap-2 justify-center h-max w-[62px] items-center bg-gradient-to-br ${props.focus ? "from-indigo" : "from-denim-light"} rounded-full px-2 py-3 text-primary-dark m-px`}> 
            <p>{props.time}</p>
            <img src={props.icon} alt="" className="h-9 m-auto"/>
            <p className="h-4 flex items-center gap-1">
              <i className="fa-solid fa-arrow-down" style={{transform: `rotate(${props.deg}deg)`}}></i>
              <span>{props.speed}</span>
            </p>
            <p className="text-xl">{props.temp}&ordm;</p>
        </div>
    </li>
  )
}