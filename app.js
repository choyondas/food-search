const searchFood = () => {
  const inputField = document.getElementById("input");
  const inputText = inputField.value;

  inputField.value = "";

  if (inputText == "") {
    alert("enter the valid name");
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => displayMeal(data.meals));
  }
};

// show meals

const displayMeal = (meals) => {
  console.log(meals);

  const divMeal = document.getElementById("divMeal");
  divMeal.textContent = "";

  if (meals == null) {
    alert("OPPS!!! THIS FOOD IS NOT IN THE MENU");
  } else {
    for (const meal of meals) {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
        <div onClick="detailFood('${meal.idMeal}')" class="card h-100">
              <img   src="${
                meal.strMealThumb
              }" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                ${meal.strInstructions.slice(0, 200)}
                </p>
              </div>
            </div>
       `;

      divMeal.appendChild(div);
    }
  }
};

const detailFood = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetailFood(data.meals[0]));
};

const displayDetailFood = (detailmeal) => {
  console.log(detailmeal);
  const detail = document.getElementById("detail");
detail.classList.add('card' )
  detail.textContent="";
  const div = document.createElement("div");

  div.innerHTML = `

<img src="${detailmeal.strMealThumb}" class="card-img W-50" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">${detailmeal.strMeal}</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>

`;
  detail.appendChild(div);
};
