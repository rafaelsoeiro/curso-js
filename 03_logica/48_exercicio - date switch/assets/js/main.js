const p = document.querySelector("#date");
const date = new Date();

p.innerHTML = date.toLocaleDateString("pt-BR", { dateStyle: "full" });
