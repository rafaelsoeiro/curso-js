// metodo splice
// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
// Esse metodo pode simular o pop, push, shift e unshift

//               -4       -3      -2        -1
//                0        1       2         3
const nomes = ["rafael", "vini", "pietro", "Antonio"];

// nomes.splice(indice,delete,elem1,elem2,elem3)

// indice -> de onde se iniica a operação, pode ser um numero negativo.
// delete -> indica quantos elementos serão removidos apartir do indice
// elem1, alem2, elem3 -> são novos itens a serem adicionados

// Simula o push -> adiciona um elemento novo no fim do array
const simulaPush = nomes.splice(nomes.length, 0, "novo");
console.log(`Simula Push => ${nomes}`);

console.log("---------------------------");
// Simula unshift -> Adiciona um elemento novo no inicio do array
const simulaUnshift = nomes.splice(0, 0, "novo");
console.log(`Simula unshift => ${nomes}`);
console.log("---------------------------");
// Simulando pop - remove um elem do fim e o retorna
const simulaPop = nomes.splice(-1, 1);
console.log(`Simula Pop`);
console.log(`Nomes => ${nomes}`);
console.log(`Elemento removido => ${simulaPop}`);
console.log("---------------------------");
// Simulando shift - remove um elem do inicio e o retorna
console.log(`Nomes Antes => ${nomes}`);
const simulaShift = nomes.splice(1, 1);
console.log(`Simula Shift => ${simulaShift}`);
console.log(`Nomes => ${nomes}`);
console.log(`Elemento removido => ${simulaShift}`);

// const simulaShift = nomes.splice(-4, 1);
// console.log(simulaShift);
// removendo do inicio

