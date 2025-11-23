const newRecipeContainer = document.getElementById('newRecipe-container');

const newRecipe = document.createElement('section');

async function GetRecepies() {
  try {
    const data = await fetch('./recepies.json');
    const returnData = await data.json();
    console.log(returnData);

    return returnData;
  } catch (error) {
    console.log(error, 'its one error here');
  }
}

newRecipe.innerHTML = `
<img src="#"></img>
<h3>ett recept</h3>
<p>this is a recipe that i am going to change later this is just dummy data </p>
<ul>
<li>Butter</li>
<li>egg</li>
<li>baking powder</li>
<li>all purpose flower</li>
</ul>
`;

newRecipeContainer.appendChild(newRecipe);
