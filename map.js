const numbers = [2, 3, 4, 5];
const doubleIt = [];
for(const num of numbers){
    const double = num * 2;
    doubleIt.push(double)
}
console.log(doubleIt);
// [ 4, 6, 8, 10 ]

const double = n => n * 2;
const output = numbers.map(double);
console.log(output);
// [ 4, 6, 8, 10 ]

const output2 = numbers.map(n => n*2)
console.log(output2)
// [ 4, 6, 8, 10 ]