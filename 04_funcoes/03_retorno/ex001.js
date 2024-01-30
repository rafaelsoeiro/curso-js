function falaFrase(inicio) {
  function falaResto(resto) {
    return inicio + " " + resto;
  }
  return falaResto;
}

const falar = falaFrase("ola");
const resto = falar("mundo");

console.log(resto);
