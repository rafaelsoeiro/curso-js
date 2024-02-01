//Um clousure é a combinação de uma função agrupada (incluída) com referências ao seu estado circundante (o ambiente léxico ).
// Em outras palavras, um clousure fornece acesso ao escopo de uma função externa a partir de uma função interna.

//global
function retornaFunc(nome) {
  //script
  return function () {
    // closure
    return nome;
  };
}
const nome01 = retornaFunc("rafael");

console.log(nome01());
