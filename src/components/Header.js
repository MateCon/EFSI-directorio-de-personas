import Link from "./Link";

export default function Header() {
    return (
        <nav className="w-screen flex flex-row justify-between px-8 md:px-16 lg:px-32 py-4 bg-slate-100">
            <Link className="font-bold text-xl place-self-center" href="/">Directorio de Personas</Link>
            <div className="flex flex-col sm:flex-row sm:gap-8 items-center">
                <Link href="/estadisticas">Estadísticas</Link>
                <Link href="/contacto">Contacto</Link>
            </div>
        </nav>
    )
}