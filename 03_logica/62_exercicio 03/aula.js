const fizzBuzz = (num) => {
  if (typeof num !== "number")
    return `${num} não é um numero, mas sim ${typeof num}`;

  if (num % 3 === 0) {
    if (num % 5 === 0) return "fizzBuzz";
    return "fizz";
  }

  return ` ${num} não é divisivel`;
};

console.log(fizzBuzz(7));
