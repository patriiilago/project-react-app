import { useState } from 'react'
import recipesData from './../../recipes-data.json'
import RecipesCard from '../RecipesCard/RecipesCard'
import NewRecipesForm from '../NewRecipeForm/NewRecipeForm'
import EditRecipesForm from '../EditRecipeForm/EditRecipeForm'


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

    const editRecipe = editedRecipe => {

        const filterEditRecipe = recipes.filter(elm => {
            return elm.id === editedRecipe.id

            console.log("EEEEEiiiiii")
        })
        setRecipes(filterEditRecipe)

    }


    return (


        <section className='RecipesList'>
            <NewRecipesForm addNewRecipe={addNewRecipe} />
            <EditRecipesForm />
            <h2>Recipes List</h2>
            {
                recipes.map(recipes => {
                    return <RecipesCard key={recipes.id} recipesInfo={recipes} deleteRecipes={deleteRecipes} />
                })
            }
            {
                recipes.map(recipes => {
                    return <RecipesCard key={recipes.id} recipesInfo={recipes} editRecipe={editRecipe} />
                })
            }
        </section>

    )
}
export default RecipesList