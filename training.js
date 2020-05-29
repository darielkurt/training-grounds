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

function functionTesting(){
    let x=5;

    while(x > 0){
    console.log(x);
    x = x -1;
    }
}

functionTesting();

//

function printAmount(amt){
    console.log(amt.toFixed(2));
}

function formatAmount(){
    return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount * 2);

amount = formatAmount();
console.log (amount);

// 

function cube(n){
    return n = Math.pow(n,3);
}

console.log(cube(3));

//

function discount(x,y){
    if(x==1){
       return y = y - (y*0.3);
    } else {
        return y
    }
}

console.log("The final amount to be paid is P" + discount(0,3000));

//

const TAX_RATE =  0.08;

function calculateFinalPurchaseAmount(amt){
    return amt = amt + (amt * TAX_RATE);
}

var amount = 99.99;
amount = calculateFinalPurchaseAmount(amount);

console.log(amount.toFixed(2));

//

const rateOfTax = 0.08, phonePrice = 2000, accessoryPrice = 500;
var balance=0,total=0,phoneCount=0,accessoryCount=0,finalTotal, spendingThreshold = 4000;

balance = prompt("What is the balance of your bank account");

while(total < balance){
    if (spendingThreshold > 0){
        spendingThreshold = spendingThreshold - phonePrice - accessoryPrice;
        balance = balance - phonePrice - accessoryPrice;
        total = total + phonePrice + accessoryPrice;

        phoneCount++;
        accessoryCount++;
    }else {
        balance = balance - phonePrice;
        total = total + phonePrice; 

        phoneCount++;
    }
}

console.log(total);

function calculatePurchaseAmount(amt2){
    return amt2 = amt2 + (amt2 * rateOfTax);
}

total = calculatePurchaseAmount(total);

function formatAmt(){
    return "$" + total.toFixed(2); 
}

finalTotal = formatAmt();

console.log("The total price is " + finalTotal);
console.log(phoneCount + " phones and " + accessoryCount + " accessories");
