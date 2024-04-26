#! /usr/bin/env node
import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js"

let myBalance = 20000
let myPin = 1234
let user = "Muhammad Khalid Hussain"

let pinanswer = await inquirer.prompt([
{
    name: "q1",
    message: "Please Enter Your Pin",
    type: "number"
},
]);
if (pinanswer.q1 === 1234) {

console.log("welcome", user);

let operation = await inquirer.prompt ([
    {
        name: "options",
        message: "Please Select your option",
        type: "list",
        choices: ["Cash Withdrawl", "Fast Cash", "Balance Inquiry", "Bill Payments"]
}
]);

if (operation.options === "Balance Inquiry")
{console.log("Your Balance Is",myBalance)
}
else if (operation.options === "Cash Withdrawl"){

let userans = await inquirer.prompt([{
        name: "useramount",
        message: "Please Enter Your Amount",
        type: "number"
    }])

if (userans.useramount <= myBalance)
console.log("Transaction Successful Your Remaining Balance is:",myBalance -= userans.useramount);

else

console.log("You have insufficient balance")}

else if (operation.options === "Fast Cash"){

    let answer = await inquirer.prompt([{
            name: "cash",
            message: "Please Select Your Amount",
            type: "list",
            choices: [1000, 3000, 5000, 10000]
        }])
        if (answer.cash === 1000)
        console.log("Transaction Successful Your Balance is:",myBalance - 1000)
    else if (answer.cash === 3000)
    console.log("Transaction Successful Your Balance is:",myBalance - 3000)
    else if (answer.cash === 5000)
    console.log("Transaction Successful Your Balance is:",myBalance - 5000)
    else if (answer.cash === 10000)
    console.log("Transaction Successful Your Balance is:",myBalance - 10000)
else console.log("Invalid Selection")}

else if (operation.options === "Bill Payments"){
let utility = await inquirer.prompt([{
    name: "bill",
    message: "Please Select an option",
    type: "list",
    choices: ["KE Bill", "SSGC Bill", "PTCL", "Water Board"]
}])
if (utility.bill === "KE Bill")
console.log("Your Bill has been paid! Thanks For Using MKH ATM")
else if (utility.bill === "SSGC Bill")
console.log("Your Bill has been paid! Thanks For Using MKH ATM")
else if (utility.bill === "PTCL")
console.log("Your Bill has been paid! Thanks For Using MKH ATM")
else if (utility.bill === "Water Board")
console.log("Your Bill has been paid! Thanks For Using MKH ATM")
    }}

else   { console.log("Please Enter Correct Pin")
}
