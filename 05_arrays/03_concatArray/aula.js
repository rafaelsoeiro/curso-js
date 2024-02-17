const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//  aAntigo.concat(arrayNovo, [Arrayliteral])
//         .concat() -> forma mais antiga de concaternar arrays
const concatArray = a1.concat(a2, [7, 8, 9], "Rafael");
console.log(concatArray);

// 2 - novoArray = [... arrayAntigo]
//      ... rest = ... spred
// forma mais moderna de concaternar arrays por meio do spred operator
// o spred operator espalha os itens de um array em outro
const spredArray = [...a1, ...a2, ...[7, 8, 9], "rafael"];
console.log(spredArray);
