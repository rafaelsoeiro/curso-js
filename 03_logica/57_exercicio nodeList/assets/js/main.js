const paragrafos = document.querySelector(".paragrafos");
// console.log(paragrafos);
const ps = paragrafos.querySelectorAll("p");
// console.log(ps)

const bodyStyles = getComputedStyle(document.body);

const { backgroundColor } = bodyStyles;

console.log(backgroundColor);

for (const p of ps) {
  p.style.backgroundColor = backgroundColor;
  p.style.color = "#fff";
}
