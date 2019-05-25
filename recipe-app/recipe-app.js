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




//wire up ingredient status on home page using array.some
//wire up save and delete button on edit page
//make page title link to home page