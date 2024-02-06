const RecipesCard = props => {

    const recipes = props.recipesInfo
    const deleteRecipes = props.deleteRecipes

    return (
        <article className="RecipesCard">
            <img src={recipes.image} alt={recipes.name} />
            <section>
                <h3>{recipes.name}</h3>
                <p>Calories: {recipes.calories}</p>
                <p>Servings: {recipes.servings}</p>
                <p>{recipes.celiac ? "Celiac" : "No celiac"} </p>

                <button className="btn-delete" onClick={() => deleteRecipes(recipes.id)}> </button>
            </section>



        </article>

    )
}
export default RecipesCard