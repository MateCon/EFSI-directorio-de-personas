import { useNavigate } from "react-router-dom"
import data from "../data/personas.js"

const getPersonasMayoresDeX = (edad, data) => {
    return data.reduce((acc, val) => acc + (val.edad >= edad), 0);
}

const getPersonasMasGrandres = (data) => {
    return data.reduce((acc, val) => {
        if (acc.length === 0 || val.edad > acc[0].edad) return [val]
        if (acc[0].edad === val.edad) return [...acc, val]
        return acc
    }, [])
}

const getPersonasMasChicas = (data) => {
    return data.reduce((acc, val) => {
        if (acc.length === 0 || val.edad < acc[0].edad) return [val]
        if (acc[0].edad === val.edad) return [...acc, val]
        return acc
    }, [])
}

export default function Estadisticas() {
    const navigate = useNavigate()

    return (
        <div className="px-8 md:px-16 lg:px-32 py-8">
            <h1 className="text-3xl pb-8">Estadisticas</h1>
            <p>Hay {getPersonasMayoresDeX(35, data)} Mayores de 35 años</p>
            <div>Mayor persona: {getPersonasMasGrandres(data).map(p => <div key={p.id} onClick={() => navigate(`/persona/${p.id}`)}>{p.nombre}</div>)}</div>
            <div>Menor persona: {getPersonasMasChicas(data).map(p => <div key={p.id} onClick={() => navigate(`/persona/${p.id}`)}>{p.nombre}</div>)}</div>
        </div>
    )   
}