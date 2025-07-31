var gender;
(function (gender) {
    gender["male"] = "male";
    gender["female"] = "female";
})(gender || (gender = {}));
console.log(gender[0]);
console.log(gender[1]);
var weekends;
(function (weekends) {
    weekends[weekends["satrday"] = 6] = "satrday";
    weekends[weekends["sunday"] = 7] = "sunday";
})(weekends || (weekends = {}));
//console.log(weekends[0]);//it will show the error inex 0 is undefiend
console.log(weekends[6]);
console.log(weekends[7]);
// numeric enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 1] = "Pending";
    OrderStatus[OrderStatus["Processing"] = 2] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 3] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 4] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus[1]);
console.log(OrderStatus[2]);
console.log(OrderStatus[3]);
console.log(OrderStatus[4]);
// string enum 
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CreditCard"] = "credit_card";
    PaymentMethod["DebitCard"] = "debit_card";
    PaymentMethod["PayPal"] = "paypal";
})(PaymentMethod || (PaymentMethod = {}));
var payment = PaymentMethod.CreditCard;
console.log(payment);
