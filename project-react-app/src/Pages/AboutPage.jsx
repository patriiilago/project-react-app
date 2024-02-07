import { Link } from "react-router-dom"
import SideBar from "../components/SideBar/SideBar"

const AboutPage = () => {



    return (
        <>
            <div className="AboutPage">

                <h1>About</h1>
                <hr />
                <p>Página web de recetas cocinadas por Patri</p>
                <div>
                    <img src='#' alt="Patri" />
                    <p>Patricia Lago
                        <br />
                        <a href="https://github.com/patriiilago?tab=repositories"> Git Hub </a>
                        <a href="https://www.linkedin.com/mynetwork/"> Linkedin</a>
                    </p>
                </div>
                <div>
                    <img src='#' alt="Óscar" />
                    <p>Óscar Gómez
                        <br />
                        <a href="https://github.com/OscarDev83?tab=repositories"> Git Hub </a>
                        <a href="#"> Linkedin</a>
                    </p>
                </div>

                <Link to="/">Volver al inicio</Link>
                <hr />
            </div>
        </>
    )
}
export default AboutPage