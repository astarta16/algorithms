//დაითვალე 1-დან N-მდე რიცხვების ჯამი
// N1 არითმეტიკული პროგრესია
function progression(n) {
  let s = (n * (n + 1)) / 2;
  return s;
}
console.log(progression(5));

// 2. ციკლის გამოყენებით
function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNumbers(2));

//3. N-ური ზომის მასივის შებრუნება (მასივის ელემენტების რიგის შეცვლა).
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

//4. ლუწი რიცხვების რაოდენობის  პოვნა მასივში
function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));

//N5 ამოცანა სტრინგის მოტრიალება მეთოდით
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
