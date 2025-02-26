const numbers = [2, 3, 4, 5, 6];
const double = numbers.map(n => n*2)
console.log(double)
// [ 4, 6, 8, 10, 12 ]

const friends = ['Lijan', 'Rakibul', 'Mamu', 'Abu', 'Rayhan'];
const lengths = friends.map(fr => fr.length);
const firstLetter = friends.map(fr => fr[0])
console.log(lengths)
// [ 5, 7, 4, 3, 6 ]
console.log(firstLetter);
// [ 'L', 'R', 'M', 'A', 'R' ]
