var age = 101;

if (age <= 18) {
    console.log("Hurry! You Get 20% Discount");
} 
else if (age>18 && age<65){
    console.log("Sorry! You Buy a Normal Ticket")
}
else if(age>=65 && age<=100){
    console.log("Hurry! You Get 30% Discount")
}
else {
    console.log("Sorry! You are not Entered the Theater");
}
