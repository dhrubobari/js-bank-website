// handle deposit button event, alada js file khola lagse.
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value; // deposit er amount ta show korbe
    // h4 deposite amount, amount ta show kora
    const newDepositAmount = parseFloat(newDepositAmountText); // ekhan theke number add korar bebosta ta hoise
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal; // value diye bhul hoisilo, jehutu h4 tag so innerText hobe
    // depositAmount e deposit ase, so ekhn amount deposit e show korbe.

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    // text e pabo, convert korbo numbers, with parseFloat.
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
});

    // handle withdraw event handler
    document.getElementById('withdraw-button').addEventListener('click', function(){
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        // text e pabo, convert korbo numbers, with parseFloat.
        const newWithdrawAmount = parseFloat(withdrawAmountText);
        console.log(newWithdrawAmount);

        // set withdraw total
        const withdrawTotal = document.getElementById('withdraw-total'); // h4 $amount
        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawText);
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotal.innerText = newWithdrawTotal;

        // update balance
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceText);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotal.innerText = newBalanceTotal;
        
        // clear the field
        withdrawInput.value = '';
    })