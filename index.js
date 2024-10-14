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

// N ზომის მასივის შებრუნება (მასივის ელემენტების რიგის შეცვლა).
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1; 

  while (left < right) {
    let temp = arr[left]; 
    
    arr[left] = arr[right];
    arr[right] = temp; 

    left++; 
    right--; 
  }

  return arr; 
}

let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));
