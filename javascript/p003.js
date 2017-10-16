function compute(num) {
  let i = 2;
  while (num > i) {
    if (!(num % i))
      num = num / i;
    i++;
  }
  return num;
};

console.log(compute(600851475143));
