import { Link } from "react-router-dom"
import SideBar from "../components/SideBar/SideBar"

const img = 'src/assets/img/404.jpg'
const NotFoundPage = () => {


    return (
        <>
            <SideBar />

            <div className="NotFoundPage">


                <h1>Locoooossss 404</h1>
                <img src={img} alt="404 Not Found" />
            </div>
        </>
    )
}
export default NotFoundPage