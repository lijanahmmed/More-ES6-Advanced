const data = [{ id: 1, name: 'Lijan', address: 'Rangpur'}]
console.log(data)
// [ { id: 1, name: 'Lijan', address: 'Rangpur' } ]
console.log(data[0]);
// { id: 1, name: 'Lijan', address: 'Rangpur' }
console.log(data[0].address)
// Rangpur

const product = {
    count: 5000,
    data : [
        {id: 1, name: 'lenevo laptop', price: 80000},
        {id: 2, name: 'macbook', price: 100000}
    ]
}
// get 2nd product price:
console.log(product.data[1].price);
// 100000

const user = {
    id: 1001,
    name: 'Lijan',
    address: {
        street: {
            post: 'Umananda',
            upzila: 'Ulipur',
            zila: 'Kurigram'
        },
        city: 'Rangpur'
    } 
}
// get user's upzila:
console.log(user.address.street.upzila)
// Ulipur