const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputPeso = e.target.querySelector("#inputPeso");
    const inputAltura = e.target.querySelector("#inputAltura");
    // console.log(inputPeso, inputAltura);

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    // console.log(peso, altura);

    if (!peso) {
        setResultado("Peso invalido", false);
        return;
    }
    if (!altura) {
        setResultado("Altura invalida", false);
        return;
    }
    const imc = getImc(peso, altura);
    const valorImc = getValorimc(imc);

    const msg = `Seu IMC é: ${imc}. O diagnostico é: ${valorImc}`;
    setResultado(msg, true);
});

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    console.log(imc.toFixed(2));
    return imc.toFixed(2);
}

function getValorimc(imc) {
    const valor = [
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "obesidade grau 1",
        "obesidade grau 2",
        "obesidade grau 3",
    ];

    if (imc >= 39.9) {
        return valor[5];
    }
    if (imc >= 34.9) {
        return valor[4];
    }
    if (imc >= 29.9) {
        return valor[3];
    }
    if (imc >= 24.9) {
        return valor[2];
    }
    if (imc >= 18.5) {
        return valor[1];
    }
    if (imc < 18.5) {
        return valor[0];
    }
}

function criaP() {
    const p = document.createElement("p");
    p.classList.add("paragrafo-resultado");
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criaP();
    if (isValid) {
        p.classList.add("ok");
    } else {
        p.classList.add("error");
    }
    p.innerHTML = msg;
    console.log(p);
    resultado.appendChild(p);
    return;
}
