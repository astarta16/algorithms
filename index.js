// 1. დაითვალე 1-დან N-მდე რიცხვების ჯამი

// არითმეტიკული პროგრესია
function progression(n) {
  let s = (n * (n + 1)) / 2;
  return s;
}
console.log(progression(5));

// ციკლის გამოყენებით
function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNumbers(2));
