export default function Contacto() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" name="nombre" required />
            <label>Apellido</label>
            <input type="text" name="apellido" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Edad</label>
            <input type="number" name="edad" required />
            <label>Mensaje</label>
            <textarea name="mensaje" required />
            <button type="submit">Enviar</button>
        </form>
    )
}