import { useState } from 'react'
import recipesData from './../../recipes-data.json'
import RecipesCard from '../RecipesCard/RecipesCard'
import './../RecipesList/RecipesList.css'
import NewRecipesForm from '../NewRecipeForm/NewRecipeForm'


const RecipesList = () => {
    const [recipes, setRecipes] = useState(recipesData)

    const deleteRecipes = recipeToDelete => {

        const filteredRecipes = recipes.filter(elm => {
            return elm.id != recipeToDelete
        })

        setRecipes(filteredRecipes)
    }






    const addNewRecipe = newRecipe => {
        const recipesDataCopy = [...recipes]
        recipesDataCopy.unshift(newRecipe)
        setRecipes(recipesDataCopy)
    }

    return (


        <section className='RecipesList'>
            <NewRecipesForm addNewRecipe={addNewRecipe} />
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