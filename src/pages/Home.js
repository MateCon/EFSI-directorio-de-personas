import { useState } from "react"
import Link from "../components/Link.js"
import data from "../data/personas.js"
import { matchesFilter } from "../helpers/stringMethods.js"

export default function Home() {
    const [filter, setFilter] = useState("")

    return (
        <div className="px-8 md:px-16 lg:px-32 py-8">
            <div className="w-full flex flex-col sm:flex-row justify-between pb-8">
                <h1 className="text-2xl md:text-3xl">Directorio de Personas</h1>
                <input placeholder="Filtre por nombre" onChange={(e) => setFilter(e.target.value)} className="border-b mt-8" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-8 gap-y-8">{data
                .filter(p => matchesFilter(`${p.nombre} ${p.apellido}`, filter))
                .map(p => (
                    <Link key={p.id} href={`/persona/${p.id}`}>
                        <div className="card">
                            <p className="text-center">{p.nombre} {p.apellido}</p>
                        </div>
                    </Link>
                ))
            }</div>
        </div>
    )
}