import { useState } from 'react'
import recipesData from './../../recipes-data.json'
import RecipesCard from '../RecipesCard/RecipesCard'
import './../RecipesList/RecipesList.css'

const RecipesList = () => {

    const [recipes, setRecipes] = useState(recipesData)

    const deleteRecipes = recipesToDelete => {

        const filteredRecipes = recipes.filter(elm => {
            elm.id != recipesToDelete
        })

        setRecipes(filteredRecipes)

    }


    return (
        <section className='RecipesList'>

            <h2>Recipes List</h2>

            {
                recipes.map(recipes => {
                    return <RecipesCard key={recipes.id} recipesInfo={recipes} deleteRecipes={deleteRecipes} />
                })

            }


        </section>

    )
}
export default RecipesList