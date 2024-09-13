function aleatorio(min, max) {
  min = min * 1000;
  max = max * 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      //  codigo executado quando a promise é rejeitada, pode lançar um erro ou uma massagem
      reject("bad value");
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi(777, aleatorio(1, 5))
  .then((res) => {
    console.log(res);
    // tudo que for retornado dentro do then será passado para o próximo then
    return esperaAi("frase 2", aleatorio(1, 5));
  })
  .then((resposta) => {
    return resposta + " vai para o outro then";
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch(e => console.error(e + " msg precisa ser uma string"));
