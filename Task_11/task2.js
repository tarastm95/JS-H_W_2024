function displayRecipe(recipe) {
    function createAndAppendElement(parent, elementType, text, isImage = false) {
        let newElement = document.createElement(elementType);
        if (isImage) {
            newElement.src = text;
        } else {
            newElement.innerText = text;
        }
        parent.appendChild(newElement);
        return newElement;
    }

    let recipeDiv = document.createElement('div');
    document.body.appendChild(recipeDiv);

    createAndAppendElement(recipeDiv, 'h2', recipe.name);
    createAndAppendElement(recipeDiv, 'img', recipe.image, true);
    createAndAppendElement(recipeDiv, 'p', `Prep Time: ${recipe.prepTimeMinutes} minutes`);
    createAndAppendElement(recipeDiv, 'p', `Cook Time: ${recipe.cookTimeMinutes} minutes`);
    createAndAppendElement(recipeDiv, 'p', `Servings: ${recipe.servings}`);
    createAndAppendElement(recipeDiv, 'p', `Difficulty: ${recipe.difficulty}`);
    createAndAppendElement(recipeDiv, 'p', `Cuisine: ${recipe.cuisine}`);
    createAndAppendElement(recipeDiv, 'p', `Calories per Serving: ${recipe.caloriesPerServing}`);
    createAndAppendElement(recipeDiv, 'p', `Rating: ${recipe.rating} (${recipe.reviewCount} reviews)`);
    createAndAppendElement(recipeDiv, 'p', `Tags: ${recipe.tags}`);
    createAndAppendElement(recipeDiv, 'p', `Meal Type: ${recipe.mealType}`);
    createAndAppendElement(recipeDiv, 'p', `User ID: ${recipe.userId}`);

    let ingredientsDiv = document.createElement('div');
    recipeDiv.appendChild(ingredientsDiv);
    createAndAppendElement(ingredientsDiv, 'h3', 'Ingredients');
    let ingredientsList = document.createElement('ul');
    ingredientsDiv.appendChild(ingredientsList);
    recipe.ingredients.forEach(function (ingredient) {
        createAndAppendElement(ingredientsList, 'li', ingredient);
    });

    let instructionsDiv = document.createElement('div');
    recipeDiv.appendChild(instructionsDiv);
    createAndAppendElement(instructionsDiv, 'h3', 'Instructions');
    let instructionsList = document.createElement('ol');
    instructionsDiv.appendChild(instructionsList);
    recipe.instructions.forEach(function (instruction) {
        createAndAppendElement(instructionsList, 'li', instruction);
    });
}

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        data.recipes.forEach(recipe => {
            displayRecipe(recipe);
        });
    })
    .catch(error => console.error('Error:', error));
