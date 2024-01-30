const relogio = document.querySelector(".relogio");

let timer;
let segundos = 0;

function criaHoraSegundos(sec) {
  const data = new Date(sec * 1000);
  return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
}

function iniciaRelogio() {
  timer = setInterval(() => {
    segundos++;
    // console.log(criaHoraSegundos(segundos));
    relogio.innerHTML = criaHoraSegundos(segundos);
  }, 1000);
}

document.addEventListener("click", (e) => {
  const el = e.target;
  // console.log(el);
  if (el.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    console.log("iniciar");
    iniciaRelogio();
  }
  if (el.classList.contains("pausar")) {
    clearInterval(timer);
    relogio.classList.add("pausado");
  }
  if (el.classList.contains("zerar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
  }
});
