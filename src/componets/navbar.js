"use client"

export default function NavBar() {
    return (
        <div className="relative flex justify-between items-center bg-[url('/back.svg')] h-20 w-full px-8 bg-center bg-cover text-secondary-dark text-xl">
            <a href="/findLocations"><i className="fa-solid fa-map-pin"></i></a>
            <a href="/todaysInfo"><i className="fa-solid fa-list-ul"></i></a>
        </div>
    )
}