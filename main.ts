#!/usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
import Choice from "inquirer/lib/objects/choice.js"


  const currency:any  ={
    PKR:280 ,
    USD:1,
    GBP:0.76 ,
    INR:74.57,
    ERU:0.91
};
let user_answer = await inquirer.prompt([{
    name :'from',
    message:'Enter from currency ',
   type :'list',
    choices: ['PKR','USD','GBP','INR','URU']
},
{
    name :'to',
    message:'Enter to currency ',
   type :'list',
   choices: ['PKR','USD','GBP','INR','URU']
},
{
    name :'amount',
    message:'Enter amount ',
    type :'number',
    choices: ['PKR','USD','GBP','INR','URU']
} 
    

]
)
// console.log(user_answer);
let formAmount =currency[ user_answer.form]
let toAmount =currency[ user_answer.to]
let amount=user_answer.amount
let baseAmount =amount/formAmount
let convertedAmount =baseAmount *toAmount

console.log(formAmount);
console.log(toAmount);
console.log(amount);
