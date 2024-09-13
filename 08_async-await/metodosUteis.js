function aleatorio(min, max) {
  min = min * 1000;
  max = max * 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      // codigo executado quando a promise é rejeitada, 
      // pode lançar um erro ou uma massagem
      reject("Type error: the parameter is a "+typeof(msg)+" and must be a String");
    }
    setTimeout(() => {
      resolve(msg + " - passei na promisse");
    }, tempo);
  });
}

const promises = [
  esperaAi("segundo valor", aleatorio(1, 5)),
  esperaAi("terceiro valor", aleatorio(1, 5)),
  esperaAi("quarto valor", aleatorio(1, 5)),
  // esperaAi(100, aleatorio(1, 5)),
];

// resolve todas as promises em bloco, e retorna um array com os valores de cada promise. se um promise for rejeitada todas serão tambem.
Promise.all(promises)
  .then((res) => res.map(r => console.log(r)))
  .catch((res) => console.error(res));

// Promise.race - resolve a primeira promise que for aceita e retorna o valor dela, mas se a primeira promise for rejeitada então esse erro é retornado.  
Promise.race(promises)
  .then((res) => console.log(res))
  .catch((res) => console.error(res));

//Promise.resolve() - Esse método cria uma promessa que já está resolvida com o valor fornecido.  
Promise.resolve('valor já resolvido')
.then((resultado) => {
  console.log(resultado); // 'valor já resolvido'
});

// Promise.reject() - Esse método cria uma promessa que já está rejeitada com o erro fornecido. É útil para criar promessas rejeitadas de forma programática.

Promise.reject('erro já rejeitado')
.catch((erro) => {
  console.error(erro); // 'erro já rejeitado'
});