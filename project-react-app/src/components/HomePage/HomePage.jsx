import NavBar from './../NavBar/NavBar'
import SideBar from './../SideBar/SideBar'
import Footer from './../Footer/Footer'
import RecipesList from '../RecipesList/RecipesList'

const HomePage = () => {

    return (
        <div className="HomePage">
            <NavBar />
            <SideBar />
            <Footer />
            <RecipesList />
        </div>
    )
}
export default HomePage