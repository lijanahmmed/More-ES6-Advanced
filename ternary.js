const money = 80;
let food;
if( money > 100){
    food = "Biriyani";
}
else{
    food =  "Biscuits"
}
console.log(food);
// Biscuits

let food1 = money > 100 ? "Biriyani" : "Biscuits";
console.log(food1);
// Biscuits

let drink = money > 50 ? 'Coke' : 'Water';
console.log(drink);
// Coke

const isActive = true;
const showUser = () => console.log('Display user');
const hideUser = () => console.log('Hide user');
isActive ? showUser() : hideUser();
// Display user