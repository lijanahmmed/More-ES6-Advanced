const numbers = [25, 36, 47, 58, 63];
const selected = numbers.find(n => n>40)
const selected2 = numbers.find(n => n>40  && n%2 === 0)
console.log(selected);
console.log(selected2);
// 47
// 58