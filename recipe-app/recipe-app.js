let recipes = getSavedRecipes()

const filters = {
    searchText: ''
}

renderRecipes(recipes, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderRecipes(recipes, filters)
    
})

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

window.addEventListener('storage', function (e) {
    if (e.key === 'recipes') {
        recipes = JSON.parse(e.newValue)
        renderRecipes(recipes, filters)
    }
})


// see if you can setup cross page ingredient checker