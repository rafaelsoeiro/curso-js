const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const random = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};

for (let numero of numeros) {
  rand = random(1, 10);
  if (numero <= rand) {
    console.log(`Pulei o numero: ${rand}`);
    continue;
  }

  if (numero === 9) {
    console.log(`numero ${numero} encontrado! saindo ...`);
    break;
  }
  console.log(`Numero: ${numero}`);
}
