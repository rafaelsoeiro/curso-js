// factory function - função fabrica
// são funções que fabricam objetos

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,
    falar: () => {
      return `o ${nome} está falando oi`;
    },
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("rafael", "soeiro", 1.74, 71);
console.log(`Antes de mudar ${p1.nomeCompleto}`);

p1.nomeCompleto = "rafael silveira soeiro";
console.log(`Depois de mudar ${p1.nomeCompleto}`);
// console.log(p1.falar());
// console.log(p1.imc);
