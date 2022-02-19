// deposit field and withdraw field, ei dui jaygay amount nibe, ekbarei function hoise.
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId); // field id take pass kora holo
    const valueInText = inputField.value;
    inputField.value = '';
    const value = parseFloat(valueInText);
    return value;
};
// for balance total
function getinnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldText = fieldTag.innerText;
    const value = parseFloat(fieldText);
    return value;
}
// fieldId total k update korbe, amount update hobe for several amounts.
function updateTotal(fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previousTotalText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const newTotal = previousTotal + amount; // innertext e add na koire ekhanei kora
    totalTag.innerText = newTotal;
};
// deposit korle balance barbe, withdraw korle kombe.
function updateBalance(amount, isAdding){
    const balanceTag = document.getElementById('balance-total'); // Id ta ke anlam
    const balanceText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceText);
    let newBalance; 
    if(isAdding == true){
        newBalance = previousBalance + amount; // variable duibar assign hoyna
    } // deposit korle add hobe (condition), let korar karon amount update hobe.
    else{
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance; // age ekhane plus kora lagto.
};
// ei function sudhu balance id takei nibe, karon seta immutable.
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    // error handling
    if (amount > 0){
    updateTotal('deposit-total', amount);
    updateBalance(amount, true); // update balance anlam, deposit er sathe add hobe.
    }
});
// handle the withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input'); // ekhane amount receive korlam
    const balance = getinnerTextValue('balance-total') // function take call korlam
    // kono negative number kora jabena, joto ase nite parba tar theke beshi parbana.
    if (amount > 0 && amount <= balance){
    updateTotal('withdraw-total', amount); // amount ta param e na thakle balance e add hobena
    updateBalance(amount, false);
    }
})