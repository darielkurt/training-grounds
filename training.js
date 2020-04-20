const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = prompt("Enter the current balance of your bank account: ");
var amount = 0;

function calculateTax(amount){
    return amount * TAX_RATE;
}

function formatAmount(amount){
    return "$" + amount.toFixed(2);
}

while (amount < bank_balance){
    amount = amount + PHONE_PRICE;

    if (amount < SPENDING_THRESHOLD)
        amount = amount + ACCESSORY_PRICE;
}

amount = amount + calculateTax( amount );

console.log("Your purchase: " + formatAmount(amount));

if (amount > bank_balance)
    console.log("You can't afford this purchase.");

//

var obj = {
    a: "hello world",
    b: 42,
    c: true
};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(typeof(obj.a));
console.log(typeof(obj.b));
console.log(typeof(obj.c));

//

var arr = [2,1,2,"hello world",4,2,4,212,2];

console.log(arr[3]);

//