function reverse (n) {
  for (var r = 0; n; n = Math.floor(n / 10)) {
    r *= 10;
    r += n % 10;
  }
  return r;
}

var max = 0;

for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    let num = i * j;
    if (num === reverse(num) && num > max)
      max = num;
  }
}

console.log(max);
