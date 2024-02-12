import { useState } from "react"
import recipesData from './../../recipes-data.json'

const EditRecipesForm = (editRecipe) => {

    const [formularioData, setFormularioData] = useState()


    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
    const [celiac, setCeliac] = useState(false)

    const handleImageChange = event => setImage(event.target.value)
    const handleNameChange = event => setName(event.target.value)
    const handleCaloriesChange = event => setCalories(event.target.value)
    const handleServingsChange = event => setServings(event.target.value)
    const handleCeliacChange = event => setCeliac(event.target.checked)

    const handleFromSubmit = event => {
        event.preventDefault()
        const recipeEdited = {
            image: image,
            name: name,
            calories: calories,
            servings: servings,
            celiac: celiac
        }
        editRecipe(recipeEdited)
    }


    return (

        < div >
            <h4>Editar Receta</h4>
            <form className='recipeForm' onSubmit={handleFromSubmit}>
                <label>
                    Imagen
                    <input type="url" placeholder='imagen de la receta' value={image} onChange={handleImageChange} />
                </label>
                <label>
                    Nombre de receta
                    <input type="text" placeholder='nombre de la receta' value={name} onChange={handleNameChange} />
                </label>
                <label>
                    Calorias
                    <input type="number" placeholder='Número de calorias' value={calories} onChange={handleCaloriesChange} />
                </label>
                <label>
                    Servicios
                    <input type="number" placeholder='Número de servicios' value={servings} onChange={handleServingsChange} />
                </label>
                <label>
                    Para celiacos
                    <input type="checkbox" value={celiac} onChange={handleCeliacChange} />
                </label>

            </form>
        </div >
    )
}
export default EditRecipesForm