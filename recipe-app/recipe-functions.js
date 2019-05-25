const getSavedRecipes = () => {
    const recipesJSON = localStorage.getItem('recipes')

    try {
        return recipesJSON ? JSON.parse(recipesJSON) : []
    } catch (e) {
        return []
    } 
}

const saveRecipes = (recipes) => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const generateRecipeDOM = function (recipe) {
    const recipeEl = document.createElement('div')
    const titleEl = document.createElement('a')
    //const ingredientSummary = document.createElement('p')

    titleEl.setAttribute('href', `edit.html#${recipe.id}`)
    recipeEl.appendChild(titleEl)
    //recipeEl.appendChild(ingredientSummary)

    if (recipe.title.length > 0) {
        titleEl.textContent = recipe.title
    } else {
        titleEl.textContent = 'Unnamed recipe'
    }

    return recipeEl

}

const renderRecipes = function (recipes) {

    //document.querySelector('#recipes').innerHTML = ''

    recipes.forEach(function (recipe) {
        const recipeEl = generateRecipeDOM(recipe)
        document.querySelector('#recipes').appendChild(recipeEl)
    })
}

const addIngredient = function (recipes, ingredient) {
    const recipe = recipes.find(function (recipe) {
        return recipe.id === recipeId
    })

    const obj = {
        text: ingredient,
        have: false
    }
    
    return recipe.ingredients.push(obj)
}

const generateIngredientDOM = function (ingredient, recipe) {
    
    const ingredientEl = document.createElement('div')
    const label = document.createElement('label')
    const span = document.createElement('span')
    const removeButton = document.createElement('button')     ///organize this better
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = ingredient.have
    


    removeButton.textContent = 'Remove'
    
    span.textContent = ingredient.text
    label.appendChild(checkbox)
    label.appendChild(span)

    
    
    
    //label.appendChild(removeButton)
    ingredientEl.appendChild(label)
    ingredientEl.appendChild(removeButton)

    checkbox.addEventListener('change', function (e) {
        ingredient.have = e.target.checked
        saveRecipes(recipes)

    })

    removeButton.addEventListener('click', function () {
        removeIngredient(recipe, ingredient.text)
        saveRecipes(recipes)
        renderIngredients(recipe)
    })
    
    
    return ingredientEl

}

const renderIngredients = function (recipe) {

    document.querySelector('#ingredients').innerHTML = ''

    recipe.ingredients.forEach(function (ingredient) {
        const ingredientEl = generateIngredientDOM(ingredient, recipe)
        document.querySelector('#ingredients').appendChild(ingredientEl)
    })
}

const removeIngredient = function (recipe, ingredient) {

    ingredientIndex = recipe.ingredients.findIndex(function (item) {
        return item.text === ingredient
    })

    if (ingredientIndex > -1) {
        recipe.ingredients.splice(ingredientIndex, 1)
    }

}

