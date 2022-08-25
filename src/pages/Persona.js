import { useParams } from "react-router-dom"
import data from "../data/personas.js"

export default function Persona() {
    const { id } = useParams()

    return (
        <div>{data.find(p => p.id === id).nombre}</div>
    )
}