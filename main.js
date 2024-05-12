//#!/usr/bin/env
import inquirer from "inquirer";
//currency conversion object
// let currencyConversion={
//   "PKR": {
//     USD:  0.0036,
//     GBP: 0.0028,
//     PKR: 1
//   },
//   "GBP": {
//    USD: 1.27,
//     GBP: 1,
//   PKR: 352.36
//   },
//   "USD": {
//    USD: 1.27,
//     GBP: 0.79,
//     PKR: 277.54
//   }
// };
// //(async () => {  
//   // Prompt for user input
//   const answer : {form: "PKR" |"GBP"| "USD",
//     to: "PKR" |"GBP"| "USD",
//     amount: number,} = await inquirer.prompt([
//     {
//       type: "list",
//       name: "from",
//       message: "What currency do you want to convert from?",
//       choices: ["PKR", "USD", "GBP"]
//   },
// { 
//       type: "list",
//       name: "to",
//       message: "What currency do you want to convert to?",
//       choices: ["PKR", "USD", "GBP"]
// },
// { 
//       type: "number",
//       name: "amount",
//       message: "Please enter the amount of currency you want to convert:"
//     }
//   ]);
//   // Destructuring user input
//   const{ form , to, amount} = answer;
//   // Perform currency conversion
//   if (from && to && amount){
//      let result= currencyConversion[from][to] *amount;
//     console.log(`Your conversion from ${from} to ${to} is ${result}`);
//   } else {
//     console.log("Invalid conversion");
//   };
// const currency={
//   USD: 1.27,
//      GBP: 1,
//    PKR: 352.36
// }
//        let User_answer = await inquirer.prompt({
//   name: "form",
//   type: "list",
//       choices: ["PKR", "USD", "GBP"],
//   message:"Enter from currency" ,
// })
const currency = {
    PKR: 280,
    USD: 1,
    GBP: 0.76,
    INR: 74.57,
    ERU: 0.91
};
let user_answer = await inquirer.prompt([{
        name: 'from',
        message: 'Enter from currency ',
        type: 'list',
        choices: ['PKR', 'USD', 'GBP', 'INR', 'URU']
    },
    {
        name: 'to',
        message: 'Enter to currency ',
        type: 'list',
        choices: ['PKR', 'USD', 'GBP', 'INR', 'URU']
    },
    {
        name: 'amount',
        message: 'Enter amount ',
        type: 'number',
        choices: ['PKR', 'USD', 'GBP', 'INR', 'URU']
    }
]);
// console.log(user_answer);
let formAmount = currency[user_answer.form];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
console.log(formAmount);
console.log(toAmount);
console.log(amount);
