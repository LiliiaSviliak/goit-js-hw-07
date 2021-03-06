// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>

// В JS есть массив строк.

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredientsRef = document.querySelector("#ingredients");

// const li1 = document.createElement('li');
// li1.textContent = ingredients[0];
// const li2 = document.createElement('li');
// li2.textContent = ingredients[1];
// const li3 = document.createElement('li');
// li3.textContent = ingredients[2];
// const li4 = document.createElement('li');
// li4.textContent = ingredients[3];
// const li5 = document.createElement('li');
// li5.textContent = ingredients[4];
// const li6 = document.createElement('li');
// li6.textContent = ingredients[5];

// ingredientsRef.append(li1, li2, li3, li4, li5, li6);

const ingredientsList = ingredients.map((item) => {
  const ingredientsLi = document.createElement("li");

  ingredientsLi.textContent = item;

  ingredientsRef.append(ingredientsLi);

  return ingredientsRef;
});

console.log(ingredientsList);
