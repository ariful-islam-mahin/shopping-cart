// current price event handler

const current = document.getElementById('phonePrice').innerText;
const currentNumber = parseFloat(current);

// plus button event handler
document.getElementById('plusBtn').addEventListener('click', function(){
    const amount = document.getElementById('amount').value;
    const amountNumber = parseFloat(amount);
    const totalAmountNumber2 = document.getElementById('amount').value = amountNumber + 1;

    const totalNumber = currentNumber * totalAmountNumber2;
    document.getElementById('phonePrice').innerText = totalNumber;
})

// minus button event handler
document.getElementById('minusBtn').addEventListener('click', function(){
    const amount = document.getElementById('amount').value;
    const amountNumber = parseFloat(amount);
    const totalAmountNumber2 = document.getElementById('amount').value = amountNumber - 1;

    const totalNumber = currentNumber * totalAmountNumber2;
    document.getElementById('phonePrice').innerText = totalNumber;
})


