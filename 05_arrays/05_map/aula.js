// .map()
// array.map((item,indice,arrayCompleto)=>{})
// principal função: iterar um array e manipular seus itens um a um
// obs: Sempre retorna um novo array do mesmo tamanho que o original só que com os valores alterados

const numeros = [47, 5, 86, 98, 845, 17, 16, 3, 8];

const mapDobraNumeros = numeros.map((num) => num * 2);
console.log(mapDobraNumeros);

const pessoas = [
  { nome: "Micheal", idade: 23 },
  { nome: "Helena", idade: 87 },
  { nome: "Martha", idade: 60 },
  { nome: "Johnny", idade: 43 },
  { nome: "Georgia", idade: 19 },
];
const mapFiltraNome = pessoas.map((pessoa) => pessoa.nome);
console.log(mapFiltraNome);

const mapFiltraObjIdade = pessoas.map((pessoa) => ({ idade: pessoa.idade }));

console.log(mapFiltraObjIdade);

const mapAdicionaId = pessoas.map((pessoa, indice) => {
  return {
    id: indice,
    ...pessoa,
  };
});

console.log(mapAdicionaId);
