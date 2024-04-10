#!/usr/bin/env node

import inquirer from "inquirer"


const Currency: any = {
    USD: 1, //base currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 74.57,
    PKR: 280,
    KWD: 31,
}
let user_answer = await inquirer.prompt(
    [  
        {
            name: "from",
            message:"Enter from Currency",
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR","KWD"]
        },
        {
            name: "to",
            message:"Enter to Currency",
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR","KWD"]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        }
    ]
    
    )

    let fromAmount = Currency[user_answer.from]//exchange rate
    let toAmount = Currency[user_answer.to]//exchange rate
    let amount = user_answer.amount
    let baseAmount = amount / fromAmount // usd base currency
    let converteAmount = baseAmount * toAmount
    console.log(converteAmount);
