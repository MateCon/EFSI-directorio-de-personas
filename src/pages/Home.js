import { useNavigate } from "react-router-dom"
import data from "../data/personas.js"

export default function Home() {
    const navigate = useNavigate()

    return (
        <div>
            {data.map(p => (
                <div key={p.id} onClick={() => navigate(`/persona/${p.id}`)}>
                    <p>{p.nombre}</p>
                </div>
            ))}
        </div>
    )
}