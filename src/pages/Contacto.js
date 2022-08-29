export default function Contacto() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="w-screen grid place-content-center mt-24">
            <form onSubmit={handleSubmit} className="w-[400px]">
                <h1 className="text-3xl pb-8">Contacto</h1>
                <label>Nombre</label>
                <input className="input" type="text" name="nombre" required />
                <label>Apellido</label>
                <input className="input" type="text" name="apellido" required />
                <label>Email</label>
                <input className="input" type="email" name="email" required />
                <label>Edad</label>
                <input className="input" type="number" name="edad" required />
                <label>Mensaje</label>
                <textarea className="input" name="mensaje" required />
                <button className="bg-slate-200 w-full text-center py-2 hover:bg-slate-300 transition active:bg-slate-400" type="submit">Enviar</button>
            </form>
        </div>
    )
}