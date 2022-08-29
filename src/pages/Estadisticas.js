import Link from "../components/Link.js";
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
    return (
        <div className="px-8 md:px-16 lg:px-32 py-8">
            <h1 className="text-3xl pb-8">Estadisticas</h1>
            <p className="mb-4">Hay {getPersonasMayoresDeX(35, data)} Mayores de 35 años</p>
            <div className="mb-4">Mayor persona: {getPersonasMasGrandres(data)
                .map(p => (
                    <Link key={p.id} href={`/persona/${p.id}`} className="inline">
                        <div className="card inline w-fit px-2 py-0">{p.nombre} {p.apellido}</div>
                    </Link>
            ))}</div>
            <div>Menor persona: {getPersonasMasChicas(data)
                .map(p => (
                    <Link key={p.id} href={`/persona/${p.id}`} className="inline">
                        <div className="card inline w-fit px-2 py-0">{p.nombre} {p.apellido}</div>
                    </Link>
                ))
            }
            </div>
        </div>
    )   
}