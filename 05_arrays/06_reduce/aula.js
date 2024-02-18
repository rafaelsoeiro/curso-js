// // array.reduce((acc,valor,indice,array)={
//   return(

//   )
// },valorInicial)

// desc: A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regr

const numeros = [47, 5, 86, 98, 845, 17, 16, 3, 8];

const reduceIsPar = numeros.reduce((acc, numero) => {
  if (numero % 2 === 0) acc.push(numero);

  return acc;
}, []);
console.log(reduceIsPar);

const pessoas = [
  { nome: "Francis", idade: 7 },
  { nome: "Blanche", idade: 10 },
  { nome: "Adam", idade: 59 },
  { nome: "Celia", idade: 89 },
  { nome: "Effie", idade: 46 },
  { nome: "Mike", idade: 67 },
];

const reducePessoasPorMaisIdade = pessoas.reduce((acc, pessoa) => {
  return pessoa.idade > acc ? acc : pessoa;
});
console.log(reducePessoasPorMaisIdade);
