import data from "../data/personas.js"

export default function Estadisticas() {
    return (
        <div>
            <p>Mayores de 35: {data.reduce((acc, val) => acc + (val.edad >= 35), 0)}</p>
            <div>Mayor persona: {data.reduce((acc, val) => {
                if (acc.length === 0 || val.edad > acc[0].edad) return [val]
                if (acc[0].edad === val.edad) return [...acc, val]
                return acc
            }, []).map(p => <div key={p.id}>{p.nombre}</div>)}</div>
        </div>
    )   
}