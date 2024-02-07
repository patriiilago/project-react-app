import { Link } from "react-router-dom"

const RecipesCard = ({ recipesInfo, deleteRecipes }) => {

    return (
        <article className="RecipesCard">
            <img src={recipesInfo.image} alt={recipesInfo.name} />
            <section>
                <h3>{recipesInfo.name}</h3>
                <p>Calories: {recipesInfo.calories}</p>
                <p>Servings: {recipesInfo.servings}</p>
                <p>{recipesInfo.celiac ? "Celiac" : "No celiac"} </p>

                <button className="btn-delete" onClick={() => deleteRecipes(recipesInfo.id)}>Borrar receta </button>
                <Link to={`/details/${recipesInfo.id}`}>Ver detalles</Link>
            </section>
        </article>
    )
}
export default RecipesCard