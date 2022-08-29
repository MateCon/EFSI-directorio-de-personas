import { useParams } from "react-router-dom"
import data from "../data/personas.js"

export default function Persona() {
    const { id } = useParams()

    const persona = data.find(p => p.id === id);

    return (
        <div className="px-8 md:px-16 lg:px-32 py-8">
            <h1 className="text-2xl md:text-3xl pb-8">{persona.nombre} {persona.apellido}</h1>
            <p>Tiene {persona.edad} años</p>
            <p>Email: <a href={`mailto:${persona.email}?Subject=Contacto del Directorio de Personas`} className="text-blue-500 underline">{persona.email}</a></p>
        </div>
    )
}