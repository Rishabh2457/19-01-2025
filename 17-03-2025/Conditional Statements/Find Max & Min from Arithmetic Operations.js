let a = 3, b = 4, c = 5;

let res1 = a + b * c;
let res2 = a % b + c;
let res3 = c + a / b;
let res4 = a * b + c;

let max = Math.max(res1, res2, res3, res4);
let min = Math.min(res1, res2, res3, res4);

console.log("Max:", max);
console.log("Min:", min);
