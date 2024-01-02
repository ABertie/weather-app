"use client"

export default function InfoBox(props) {
    return (
        <section className="flex flex-col h-full bg-denim/70 ring-1 ring-indigo/70 aspect-square rounded-3xl p-4 text-secondary-dark">
            <h2 className="uppercase text-xs"><i className={`fa-solid fa-${props.icon && props.icon}`}></i> {props.titel && props.titel}</h2>

            <p className="text-3xl text-primary-dark font-thin">{props.value && props.value}</p>
            
            <p className="mt-auto text-sm">{props.text && props.text}</p>
        </section>
    )
}