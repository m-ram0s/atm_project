const account = require('./account');
const wallet = require('./wallet');

function getBalance (){
    console.log('\nYour current balance is: ' + '$' + account.balance + '\n');
    atmMenu();
}

function withdraw(){
    const prompt = require('prompt-sync')();
    let withdrawAmount = parseInt(prompt('Enter the amount to withdraw: '));
    let newWithdrawBalance = account.balance -= withdrawAmount;;

        console.log('\nYour new balance is: ' + '$' + newWithdrawBalance + '\n');
        atmMenu();
}

function deposit(){
    const prompt = require('prompt-sync')();
    let depositAmount = parseInt(prompt('Enter the amount to desposit: '));
    let newDepBalance = account.balance += depositAmount;;

        console.log('\nYour new balance is: ' + '$' + newDepBalance + '\n');
        atmMenu();
}

function validatePin(){
    const prompt = require('prompt-sync')();
    //console.log('PIN VAL');
     let pinNumber = prompt('Enter your PIN to begin: ');
     if (pinNumber === '1010'){
         console.log('\n*** PIN Validated ***\n');
         atmMenu();
     }
     else if (pinNumber !== '1010'){
         console.log('\nIncorrrect PIN. Please try again.');
             validatePin();
     }
 return pinNumber 
}

function atmMenu(){
    const prompt = require('prompt-sync')();
    let atmChoice = parseInt(prompt('Select an option and hit Enter:\n\nBalance = 1\n\nWithdraw = 2\n\nDeposit = 3\n\nExit = 4\n'));

    if (atmChoice === 1) {
            getBalance();
    }
        else if (atmChoice === 3){
            deposit();
        }
        else if (atmChoice === 2){
            withdraw();
        }
        else if (atmChoice === 4){
            exit();
        }
}

function exit(){
    validatePin();
}

module.exports = {
    validatePin:validatePin,
    atmMenu:atmMenu,
    getBalance:getBalance.balance,
    withdraw:withdraw,
    deposit:deposit
}
