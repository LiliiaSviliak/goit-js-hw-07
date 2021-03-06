// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector("#name-input");

const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (e) => {
  e.preventDefault();

  outputRef.textContent = `незнакомец`;

  if (inputRef.value !== "") {
    outputRef.textContent = inputRef.value;
  }
});

console.log(inputRef);
