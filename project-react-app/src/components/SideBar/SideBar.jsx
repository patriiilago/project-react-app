import { NavLink } from "react-router-dom"


const SideBar = () => {
    return (
        <header className="SideBar">
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? "selected" : ""}>Inicio </NavLink>
                    <hr></hr>
                </li>
                <li>
                    <NavLink to='/sobre-mi' className={({ isActive }) => isActive ? "selected" : ""}>Sobre mi </NavLink>
                    <hr></hr>
                </li>
            </ul>
        </header>
    )
}

export default SideBar