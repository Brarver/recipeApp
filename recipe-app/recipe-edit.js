let recipes = getSavedRecipes()
const recipeId = location.hash.substring(1)
let recipe = recipes.find((recipe) => recipe.id === recipeId)

if (!recipe) {
    location.assign('index.html')
}

//renderIngredients(recipe)

document.querySelector('#recipe-title').value = recipe.title
document.querySelector('#recipe-instructions').value = recipe.instructions

renderIngredients(recipe)


document.querySelector('#recipe-title').addEventListener('input', (e) => {
    recipe.title = e.target.value
    saveRecipes(recipes)
})

document.querySelector('#recipe-instructions').addEventListener('input', (e) => {
    recipe.instructions = e.target.value
    saveRecipes(recipes)
})

document.querySelector('#add-ingredient-form').addEventListener('submit', function (e) {
    e.preventDefault()
    addIngredient(recipes, e.target.elements.text.value)
    saveRecipes(recipes)
    renderIngredients(recipe)
    e.target.elements.text.value = ''
})

