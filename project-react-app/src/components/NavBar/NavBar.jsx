import './NavBar.css'
import logo from './../../assets/img/logo.png'

const NavBar = () => {

    return (
        <header className="NavBar" >
            <h1>Cooking With Patri</h1>
            <img className="ImageNav" src={logo} alt="logo" />
        </header>
    )
}

export default NavBar