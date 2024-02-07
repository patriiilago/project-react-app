import { NavLink } from "react-router-dom"
import "./SideBar.css"

const SideBar = () => {
    return (
        <header className="SideBar">
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? "selected" : ""}>Inicio </NavLink>

                </li>
                <li>
                    <NavLink to='/sobre-mi' className={({ isActive }) => isActive ? "selected" : ""}>Sobre mi </NavLink>

                </li>
            </ul>
        </header>
    )
}

export default SideBar