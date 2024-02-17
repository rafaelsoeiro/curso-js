// Filter
// array.filter((item,indice,arrayCompleto)=>{})
// principal função: itera um array item a item e retorna um item mediante condição verdadeira
// obs: Sempre retorna um array do mesmo tamanho ou menor que o original

const numeros = [47, 5, 86, 98, 845, 17, 16, 3, 8];
const filterNumeros = numeros.filter((item) => item > 45);
console.log(filterNumeros);

const pessoas = [
  { nome: "Micheal", idade: 23 },
  { nome: "Helena", idade: 87 },
  { nome: "Martha", idade: 60 },
  { nome: "Johnny", idade: 43 },
  { nome: "Georgia", idade: 19 },
];

const filterPessoasPorNome = pessoas.filter((pessoa) => {
  return pessoa.nome.length >= 5;
});
console.log(filterPessoasPorNome);

const filterPessoasPorIdade = pessoas.filter((pessoa) => {
  return pessoa.idade > 50;
});
console.log(filterPessoasPorIdade);

const filterPessoasPorNomeComA = pessoas.filter((pessoa) => {
  return pessoa.nome.toLocaleLowerCase().endsWith("a");
});
console.log(filterPessoasPorNomeComA);
