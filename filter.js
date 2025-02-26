const numbers = [25, 36, 47, 58, 63];
const selected = numbers.filter(n => n>40)
console.log(selected);
// [ 47, 58, 63 ]

const evenNumber = numbers.filter(num => num%2 === 1);
console.log(evenNumber)
// [ 25, 47, 63 ]

const friends = ['Lijan', 'Rakibul', 'Mamu', 'Abu', 'Rayhan'];
const oddFriends = friends.filter(fr => fr.length%2 === 0);
console.log(oddFriends);
// [ 'Mamu', 'Rayhan' ]