// "arguments" guarda todos os valores passados como arguments (não funciona em arrow function)

// 001
function func() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
    console.log(total);
  }
}
// func(1, 2, 3, 4, 5, 6);

//002
function func2(a = 0, b = 2) {
  console.log(a + b);
}
// func2(10);

//003
function fazConta(op, acc, ...values) {
  for (const value of values) {
    if (op === "+") acc += value;
    if (op === "-") acc -= value;
    if (op === "*") acc *= value;
    if (op === "/") acc /= value;
  }
  console.log(acc);
}
fazConta("+", 1, 10, 10,10);
