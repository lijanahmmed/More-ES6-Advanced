const arr = [2, 3, 4, 5, 6];
const show = a => console.log(a)
arr.forEach(show)
// 2
// 3
// 4
// 5
// 6

arr.forEach((item, index, array) => {
    console.log("item:", item, "index:", index, "array:", array);
})
// item: 2 index: 0 array: [ 2, 3, 4, 5, 6 ]
// item: 3 index: 1 array: [ 2, 3, 4, 5, 6 ]
// item: 4 index: 2 array: [ 2, 3, 4, 5, 6 ]
// item: 5 index: 3 array: [ 2, 3, 4, 5, 6 ]
// item: 6 index: 4 array: [ 2, 3, 4, 5, 6 ]

let sum = 0;
arr.forEach((item) => {
    sum += item;
})
console.log(sum)
// 20

const numbers = [2, 3, 4, 5, 6];
const double = numbers.forEach(n => n*2)
console.log(double);
// undefined
