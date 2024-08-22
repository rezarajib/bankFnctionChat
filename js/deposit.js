document.getElementById('depositBtn').addEventListener('click',function(){
    const amountDeposit = document.getElementById('depositField');
    const newAmountDepossitFieldString = amountDeposit.value;
    const newAmountDepossitField = parseFloat(newAmountDepossitFieldString);
    console.log(typeof newAmountDepossitField);
    const deposit = document.getElementById('depositTotal');
    const totalPreviousDepositString = deposit.innerText;
    const totalPreviousDeposit = parseFloat(totalPreviousDepositString)
    console.log(typeof totalPreviousDeposit);
    const currentDepositTotal = totalPreviousDeposit + newAmountDepossitField;
    deposit.innerText = currentDepositTotal; 
    //clear the deposit value 
     // add curent balance 
    const currentBalanceElement = document.getElementById('currentBalanceElement');
    const currentBalanceElementString = currentBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(currentBalanceElementString);
    // calculate current balance total
    const currentBalanceTotal = previousBalanceTotal + newAmountDepossitField;
    // set the balance total 
    currentBalanceElement.innerText = currentBalanceTotal;
    amountDeposit.value = ''; 
  

})
// document.getElementById('depositBtn').addEventListener('click',function(){
//     const amountField = document.getElementById('depositField');
//     const amountValue = amountField.value;
//     const deposit = document.getElementById('depositTotal');
//     const depositValue = deposit.innerText;
//     deposit.innerText = amountValue;
// })
// document.getElementById('depositBtn').addEventListener('click', function() {
//     const depositField = document.getElementById('depositField');
//     const depositAmount = depositField.value;
//     const depositTotalElement = document.getElementById('depositTotal');
//     const depositTotal = depositTotalElement.innerText;
//     depositTotalElement.innerText = depositAmount;
// });