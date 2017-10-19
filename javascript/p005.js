function gcd(x, y) {
  if (!y)
    return x;
  return gcd(y, x % y);
}

function lcm(x, y) {
  return Math.abs(x * y) / gcd(x, y);
}

function lcm_seq(seq) {
  return seq.reduce(lcm);
}

lcm_of_seq = lcm_seq([...Array(21).keys()].slice(1));
console.log(lcm_of_seq);

