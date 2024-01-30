//declaração de função (function hoisting)
function falaOi() {
  console.log("oi");
}
falaOi();

// funções são obsjetos de primeira classe
// function expression
const souUmDado = function () {
  console.log("sou um dado");
};
souUmDado();

//Arrow functions
const arrow = (p) => {
  console.log("sou arrow function " + p);
};
arrow();

// func dentro de objetos
const obj = {
  falar() {
    console.log("estou falando");
  },
};
obj.falar();
