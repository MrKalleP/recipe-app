async function GetRecepies() {
  const newRecipeContainer = document.getElementById('newRecipe-container');

  try {
    const response = await fetch('./recepies.json');
    const data = await response.json();

    const recepies = data.recepies;

    for (let i = 0; i < recepies.length; i++) {
      const recepieData = recepies[i];

      const newRecipe = document.createElement('section');

      newRecipe.innerHTML = `
<img src="${recepieData.img}">
<h3>${recepieData.title}</h3>
<p>${recepieData.description}</p>
<ul>
<li>${[...recepieData.ingredients]}</li>
<li>${[...recepieData.doThis]}</li>
<li>${[...recepieData.forServing]}</li>
<li>all purpose flower</li>
</ul>
`;
      newRecipeContainer.appendChild(newRecipe);
    }
  } catch (error) {
    console.log(error, 'its one error here');
  }
}

GetRecepies();
