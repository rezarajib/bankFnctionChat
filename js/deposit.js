document.getElementById('depositBtn').addEventListener('click',function(){
    const amountDeposit = document.getElementById('depositField');
    const newAmountDepossitField = amountDeposit.value;
    const deposit = document.getElementById('depositTotal');
    const totalPreviousDeposit = deposit.innerText;
    const currentDepositTotal = totalPreviousDeposit + newAmountDepossitField;
    deposit.innerText = currentDepositTotal; 
    //clear the deposit value 
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