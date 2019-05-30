let recipes = getSavedRecipes()
const recipeId = location.hash.substring(1)
let recipe = recipes.find((recipe) => recipe.id === recipeId)

if (!recipe) {
    location.assign('index.html')
}

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

document.querySelector('#save-button').addEventListener('click', function () {
    saveRecipes(recipes)
    location.assign('index.html')
})

document.querySelector('#remove-button').addEventListener('click', function () {
    removeRecipe(recipes, recipeId)
    saveRecipes(recipes)
    location.assign('index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'recipes') {
        recipes = JSON.parse(e.newValue)
        recipe = recipes.find((recipe) => recipe.id === recipeId)

        if (!recipe) {
            location.assign('index.html')
        }

        document.querySelector('#recipe-title').value = recipe.title
        document.querySelector('#recipe-instructions').value = recipe.instructions
    }
})

