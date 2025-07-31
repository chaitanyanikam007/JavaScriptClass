

export enum gender{
    male =`male`,
    female=`female`
}

console.log(gender[0]);
console.log(gender[1]);

enum weekends{
    satrday =6,//custon index no you can give as per your requirment
    sunday =7
}
//console.log(weekends[0]);//it will show the error inex 0 is undefiend
console.log(weekends[6]);
console.log(weekends[7]);


// numeric enum

enum OrderStatus {

    Pending = 1,

    Processing = 2,

    Shipped = 3,

    Delivered = 4

}

console.log(OrderStatus[1]);
console.log(OrderStatus[2]);
console.log(OrderStatus[3]);
console.log(OrderStatus[4]);


// string enum 

 

enum PaymentMethod {

    CreditCard = 'credit_card',

    DebitCard = 'debit_card',

    PayPal = 'paypal'

}

let payment : PaymentMethod = PaymentMethod.CreditCard;

console.log(payment);