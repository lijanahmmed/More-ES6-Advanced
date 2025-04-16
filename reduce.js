const numbers = [2, 3, 4, 5, 6];
const sum = numbers.reduce( (previous, current) => previous + current, 0);
const multiply = numbers.reduce( (previous, current) => previous * current, 1);
console.log(sum);
// 20
console.log(multiply);
// 720
