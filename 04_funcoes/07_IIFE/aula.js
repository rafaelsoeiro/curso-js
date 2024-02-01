// IIFE - Immediately invoked function expression
// IIFE - função de invocação imediata
// IIFE - executa uma função imediatamente e a protege do escopo global
// IIFE - invocado imediatamente sem se comunicar com o escobo global

(function (idade, peso, altura) {
  const sobrenome = "soeiro";
  function criaNome(nome) {
    return `${nome} ${sobrenome}`;
  }
  function falaNome() {
    return criaNome("rafael");
  }
  const nome = falaNome();
  console.log(
    `Seu nome é ${nome}, voce tem ${idade} com ${peso} kg e ${altura} de altura`
  );
})(23, 71.6, 1.74);
