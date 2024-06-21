let btnChiffre = document.querySelectorAll("button.btn-type-1");
let screen = document.querySelector(".calc-screen");
// let egal = document.querySelector("#btn-egal");
let clear = document.querySelector("#btn-clear");
let operators = document.querySelectorAll(".operator");

let firstNumber = 0;
let secondNumber = 0;
let answer = 0;
let operator = "";
let calcTest = false;

btnChiffre.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (answer === 0) {
      //read number
      if (operator === "") {
        screen.value += parseFloat(e.target.value);
        firstNumber = parseFloat(screen.value);

        console.log("Nombre1: " + firstNumber);
      } else {
        secondNumber += parseFloat(e.target.value);
        screen.value = parseFloat(secondNumber);
        console.log("Nombre2: " + secondNumber);
      }
    } else {
      // answer = 0;
      // firstNumber = 0;
      firstNumber = answer;
      screen.value = "";
      screen.value += parseFloat(e.target.value);
      secondNumber = screen.value;

      console.log("Cool");
    }
  });
});

//operator Sign
operators.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.value !== "=") {
      operator = e.target.value;

      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);

      // console.log("Calcule: " + answer);
      // screen.value = parseFloat(firstNumber) + parseFloat(secondNumber);

      console.log("Operateur egale: " + operator);
      console.log("screen.value: " + screen.value);
    } else {
      console.log("Nombre2: " + secondNumber);

      switch (operator) {
        case "+":
          add();
          break;

        case "-":
          subtract();
          break;
        case "x":
          multiply();
          break;
        case "÷":
          divide();
          break;

        default:
          break;
      }
    }
  });
});

clear.addEventListener("click", function () {
  screen.value = "";
  firstNumber = answer;
  answer = 0;
  secondNumber = 0;
  operator = "";
});

function add() {
  answer = parseFloat(firstNumber) + parseFloat(secondNumber);
  console.log("Somme : " + answer);
  screen.value = answer;
  firstNumber = answer;
  secondNumber = answer;
}
function subtract() {
  answer = parseFloat(firstNumber) - parseFloat(secondNumber);
  console.log("Soustraction : " + answer);
  screen.value = answer;
  firstNumber = answer;
  secondNumber = answer;
}
function multiply() {
  answer = parseFloat(firstNumber) * parseFloat(secondNumber);
  console.log("Produit : " + answer);
  screen.value = answer;
  firstNumber = answer;
  secondNumber = answer;
}
function divide() {
  answer = parseFloat(firstNumber) / parseFloat(secondNumber);
  console.log("quotiant : " + answer);
  screen.value = answer;
  firstNumber = answer;
  secondNumber = answer;
}
function percentage() {
  screen.textContent = parseFloat(firstNumber) / 100;
  firstNumber = answer;
  secondNumber = answer;

  console.log("percentage : " + answer);
}
