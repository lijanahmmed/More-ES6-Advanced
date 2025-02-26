class vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class bus extends vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
const output = new bus(bus, 12, 40, 60);
console.log(output);
// bus {
//     name: [class bus extends vehicle],
//     price: 12,
//     seat: 40,
//     ticketPrice: 60
//   }