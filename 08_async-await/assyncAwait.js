function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

async function esperaAi(msg, tempo) {
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

async function exe(){
  try{
    const res1 = await esperaAi("primeira", aleatorio(1, 5));
    console.log(res1);
    const res2 = await esperaAi("segunda", aleatorio(1, 5));
    console.log(res2);
    await esperaAi("terceira", aleatorio(1, 5)).then(res=> console.log(res));
    await esperaAi("quarta", aleatorio(1, 5)).then(res=> console.log(res));
  }catch(e){
    console.log(e);
  }
  
}
exe();