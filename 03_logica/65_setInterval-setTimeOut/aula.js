function monstraHora() {
  const data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const timer = setInterval(() => console.log(monstraHora()), 2000);
// exercuta uma função de forma ciclica conforme ao intervalo definido em ms até que a execução seja parada. clearInterval é a função que encerra a eexecução.

setTimeout(() => clearInterval(timer),10000);
