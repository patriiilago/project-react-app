import { Link } from "react-router-dom"
import oscar from './../images/oscar.jpeg'
import patri from './../images/patri.jpeg'
import link from './../images/link.png'
import git from './../images/github.png'
const AboutPage = () => {



    return (
        <>
            <div className="AboutPage">
                <h1 className='tituloAbout'>Sobre Nosotros</h1>
                <p>Bienvenido a "Cocina con Patri", el destino culinario donde la diversidad y la pasión se fusionan. Dirigida por la talentosa chef Patri, nuestra página ofrece una amplia variedad de recetas para todos los gustos y necesidades, desde vegetarianos hasta celíacos y veganos. Descubre la magia de la cocina casera con recetas explicadas paso a paso y con ingredientes accesibles. </p>
                <hr />
                <div className='cardsProf'>
                    <div className='profileCard' >
                        <img className='profilePic' src={patri} alt="Patri" />
                        <p><h2 className='nombreDev'>Patricia Lago</h2>
                            <Link to={"https://github.com/patriiilago?tab=repositories"}>
                                <img className='githublogo' src={git} alt="GitHub logo" />
                            </Link>
                            <Link to={"https://www.linkedin.com/mynetwork/"}>
                                <img className='linkedinlogo' src={link} alt="linkedin logo" />
                            </Link>
                        </p>
                    </div>
                    <div className='profileCard'>
                        <img className='profilePic' src={oscar} alt="Óscar" />
                        <p><h2 className='nombreDev'>Óscar Gómez</h2>
                            <Link to={"https://github.com/OscarDev83?tab=repositories"}>
                                <img className='githublogo' src={git} alt="GitHub logo" />
                            </Link>
                            <Link to={"https://www.linkedin.com/in/oscar-gomez-diez-b967202a/"}>
                                <img className='linkedinlogo' src={link} alt="linkedin logo" />
                            </Link>
                        </p>
                    </div>
                </div>

                <Link className='backToHome' to="/">Volver al inicio</Link>
            </div>
        </>
    )
}
export default AboutPage