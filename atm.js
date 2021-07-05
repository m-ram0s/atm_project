const index = require('./index');
const account = require('./account');
const wallet = require('./wallet');
const prompt = require('prompt-sync')();

function validatePin(){
    //console.log('PIN VAL');
     let pinNumber = prompt('Welcome. Please enter your PIN to begin: ');
     if (pinNumber === pin){
         console.log('\n*** PIN Validated ***\n');
         atmMain();
     }
     else if (pinNumber !== pin){
         console.log('\n!!! Incorrrect PIN. Please try again. !!!');
             validatePin();
     }
}

function getBalance(){
    console.log('\n$$ Your current BANK balance is: ' + '$' + account.balance.toFixed(2));
    console.log('$$ Your current DIGITAL WALLET balance is: ' + '$' + wallet.walletCash.toFixed(2));
    let totalBalance = account.balance += wallet.walletCash;
    console.log('$$ Your current COMBINED balance is: ' + '$' + totalBalance.toFixed(2) + '\n');
    atmMain();
}

function withdraw(){
    console.log('\n');
    let withdrawAmount = parseInt(prompt('$$ Enter the amount of to withdraw or enter 0 to cancel: '));
    if (withdrawAmount >= account.balance) {
        console.log('!!! Insufficient funds to withdraw !!!. Please try again.');
        withdraw();
    }
        else {
            let newWithdrawBalance = account.balance -= withdrawAmount;
            let newWalletWithBalance = wallet.walletCash += withdrawAmount;
            console.log('\nYour new BANK balance is: ' + '$' + newWithdrawBalance.toFixed(2));
            console.log('Your new DIGITAL WALLET balance is: ' + '$' + newWalletWithBalance.toFixed(2) + '\n');
            atmMain();
    }
}

function deposit(){
    console.log('\n');
    let depositAmount = parseInt(prompt('$$ Enter the amount to desposit or enter 0 to cancel: '));
    if (depositAmount >= wallet.walletCash) {
        console.log('!!! Insufficient funds to deposit !!!. Please try again.');
        deposit();
    }
        else {
            let newDepBalance = account.balance += depositAmount;
            let newWalletDepBalance = wallet.walletCash -= depositAmount;
            console.log('\nYour new BANK balance is: ' + '$' + newDepBalance.toFixed(2));
            console.log('Your new DIGITAL WALLET balance is: ' + '$' + newWalletDepBalance.toFixed(2) + '\n');
            atmMain();
    }
}

function exit(){
   // console.log('\n');
   validatePin();
}
function atmMain(){
    console.log('<<< Select an option and HIT ENTER: >>>\n\n* Show Current Balance = 1\n\n* Withdraw = 2\n\n* Deposit = 3\n\n* Exit = 4\n')
    let atmChoice = parseInt(prompt('Enter a number: '));

    if (atmChoice === 1) { 
            getBalance();
    }
        else if (atmChoice === 2){
            withdraw();
        }
        else if (atmChoice === 3){
            deposit();
        }
        else if (atmChoice === 4){
            console.log('\n');
            exit();
        }
        else {
            console.log('!!! Invalid input - Please try again !!!');
            atmMain();
        }
}
    module.exports = {
        getBalance:getBalance,
        withdraw:withdraw,
        deposit:deposit,
        validatePin:validatePin,
        atmMain:atmMain,
        exit:exit
    }