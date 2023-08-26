function add(step) {
  // We gave the number element an id of number so we can use that to get the element
  let numberElement = document.getElementById("number");
  // We can use the innerText property to get the text inside the element
  let number = numberElement.innerText;
  number = parseInt(number) + step; 
  numberElement.innerText = number;
};

function subtract(step) {
  // We gave the number element an id of number so we can use that to get the element
  let numberElement = document.getElementById("number");
  // We can use the innerText property to get the text inside the element
  let number = numberElement.innerText;
  number = parseInt(number) - step; 
  numberElement.innerText = number;
};

function reset() {
  // We gave the number element an id of number so we can use that to get the element
  let numberElement = document.getElementById("number");
  // We can use the innerText property to get the text inside the element
  let number = numberElement.innerText;
  number = 0; 
  numberElement.innerText = number;
};

const doSomeMath = (mathFunction) => {
  let number2 = parseInt(document.getElementById("calculate").value);
  return mathFunction(number2);
};