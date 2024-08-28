//  this code is please withdraw part
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = withdrawField.value;
    const withdrawValueString = parseFloat(withdrawFieldValue);
    // this code is only withdraw part

    const withdraw = document.getElementById('withdraw-Element');
    const withdrawValue = withdraw.innerText;
    const withdrawString = parseFloat(withdrawValue);
    
    const currentWithdraw = withdrawValueString + withdrawString;

    withdraw.innerText = currentWithdraw;
    
    // get the previous balance total withdraw connect
    const currentBalanceElement = document.getElementById('currentBalanceElement');
    const balanceTotal = currentBalanceElement.innerText;
    const balanceTotalString = parseFloat(balanceTotal);
    
    // set the new balance total
    const newBalanceTotal = balanceTotalString - withdrawString;
    currentBalanceElement.innerText = newBalanceTotal;
    
    
    withdrawField.value = '';
    
})