// retorne a soma do dobro de todos os pares
// 1 -> filtrar os pares
// 2 -> dobrar os valores
// 3 -> reduzir  (somar tudo)

// const numeros = [54, 59, 56, 25, 2, 27, 70, 20, 37, 16, 8, 100];
// const numerosPares = numeros.filter((num) => num % 2 === 0);
// console.log(numerosPares);
// const numerosDobrado = numeros.map((num) => num * 2);
// console.log(numerosDobrado);
// const numerosSoma = numeros.reduce((acc, num) => {
//   return acc + num;
// }, 0);
// console.log(numerosSoma);

const numeros = [54, 59, 56, 25, 2, 27, 70, 20, 37, 16, 8, 100];
const somaDobroDosPares = numeros
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((acc, num) => {
    return acc + num;
  }, 0);

console.log(somaDobroDosPares);
