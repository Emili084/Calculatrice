const firstValueInput = document.querySelector("#first-value");
const secondValueInput = document.querySelector("#second-value");
const operatorSelect = document.querySelector("#operator");
const myButton = document.querySelector("#my-button");

function calculatrice() {
    const firstValue = Number(firstValueInput.value);
    const secondValue = Number(secondValueInput.value);
    const operator = operatorSelect.value;
    let resultat;
    switch (operator) {
    case "+":
      resultat = firstValue + secondValue;
      break;
    case "-":
      resultat = firstValue - secondValue;
      break;
    case "*":
      resultat = firstValue * secondValue;
      break;
    case "/":
        if (secondValue === 0) {
            resultat = "Erreur : division par zéro";
          } else {
      resultat = firstValue / secondValue;
          }
      break;
    default:
      resultat = "Opérateur invalide";
  }
  document.querySelector("#resultat").innerHTML = resultat;
}

myButton.addEventListener("click", calculatrice);


