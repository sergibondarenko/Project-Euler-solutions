function compute() {
  const max = 4000000;
  let sum = 0;
  let x = 1;
  let y = 2;
  
  console.log(x);
  while (x <= max) {
    if (!(x % 2)) {
      sum += x;
    }
    [x, y] = [y, x + y]
  }

  return sum;
};

console.log(compute());
