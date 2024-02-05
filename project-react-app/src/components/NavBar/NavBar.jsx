import './NavBar.css'
import logo from 'C:/users/patri/documents/ironhack/week4/week4-day1/project-react-app/project-react-app/src/assets/logo.png'
const NavBar = () => {

    return (
        <header className="NavBar" >
            <h1>Coocking With Patri</h1>
            <img src={logo} alt="logo" />
        </header>
    )
}

export default NavBar