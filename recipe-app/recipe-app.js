let recipes = getSavedRecipes()

const filters = {
    seachText: ''
}

renderRecipes(recipes)

document.querySelector('#add-recipe').addEventListener('click', function () {
    const id = uuidv4()

    recipes.push({
        id: id,
        title: '',
        instructions: '',
        ingredients: []
    })
    saveRecipes(recipes)
    location.assign(`edit.html#${id}`)
})

