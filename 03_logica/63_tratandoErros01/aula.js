function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser erros");
  }
  return x + y;
}

try {
  soma(1, "1");
} catch (e) {
  console.log(e.message);
}
