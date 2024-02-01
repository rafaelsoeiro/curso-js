const rand = (min = 1000, max = 3000) => {
  const num = Math.random() * (max - min) + min;

  return Math.floor(num);
};

function f1(callBack) {
  setTimeout(() => {
    console.log("f1");
    if (callBack) callBack();
  }, rand());
}

function f2(callBack) {
  setTimeout(() => {
    console.log("f2");
    if (callBack) callBack();
  }, rand());
}

function f3(callBack) {
  setTimeout(() => {
    console.log("f3");
    if (callBack) callBack();
  }, rand());
}

f1(() => {
  f2(() => {
    f3(() => {
      console.log("fim");
    });
  });
});
console.log("inicio");
