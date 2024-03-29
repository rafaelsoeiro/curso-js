function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Não é data");
  }

  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const hora = retornaHora(false);
  console.log(hora);
} catch (error) {
  console.log(error.message);
}
