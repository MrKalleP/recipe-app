async function GetRecepies() {
  const newRecipeContainer = document.getElementById('newRecipe-container');

  const newRecipe = document.createElement('section');

  try {
    const data = await fetch('./recepies.json');
    const returnData = await data.json();
    return returnData;
  } catch (error) {
    console.log(error, 'its one error here');
  }

  for (let i = 0; i < returnData.length; i++) {
    const recepieData = returnData[i];
    newRecipe.innerHTML = `
<img src="#">${recepieData.img}</img>
<h3>${recepieData.title}</h3>
<p></p>
<ul>
<li>Butter</li>
<li>egg</li>
<li>baking powder</li>
<li>all purpose flower</li>
</ul>
`;
    newRecipeContainer.appendChild(newRecipe);
  }
}

GetRecepies();
