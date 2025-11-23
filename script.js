const newRecipeContainer = document.getElementById('newRecipe-container');

console.log(newRecipeContainer);

const newRecipe = document.createElement('div');

newRecipe.innerHTML = `
<img src="#"></img>
<h2>one recipe</h2>
<p>this is a recipe that i am going to change later this is just dummy data </p>
<ul>
<li>Butter</li>
<li>egg</li>
<li>baking powder</li>
<li>all purpose flower</li>
</ul>
`;

newRecipeContainer.appendChild(newRecipe);
