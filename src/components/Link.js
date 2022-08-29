import { useNavigate } from "react-router-dom"

export default function Link({ href, children, className }) {
    const navigate = useNavigate()

    return (
        <div href="#" className={`link ${className}`} onClick={() => navigate(href)}>{children}</div>
    )
}