const random = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};

let rand = random(1, 5);

// verifica antes de iterar pela primeira vez
while (rand !== 5) {
  rand = random(1, 5);
  console.log(rand);
}

// verifica depois de iterar pela primeira vez
// do {
//   rand = random(1, 5);
//   console.log(rand);
// } while (rand !== 5);
