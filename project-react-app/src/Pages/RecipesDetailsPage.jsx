import { Link, Navigate, useParams } from "react-router-dom"
import recipesData from './../recipes-data.json'


const RecipesDetailsPage = () => {

    const { recipe_id } = useParams()

    const foundRecipe = recipesData.find(elm => elm.id == recipe_id)

    if (!foundRecipe) return <Navigate to="/mallll" />

    return (

        <div className="RecipesDetailsPage">
            <h1>Detalles para {foundRecipe.name}</h1>
            <hr />
            <p>Calorías: {foundRecipe.calories}</p>

            <Link to='/'>Ir a inicio</Link>
        </div>

    )
}

export default RecipesDetailsPage