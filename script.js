// current phone price event handler

const current1 = document.getElementById('phonePrice').innerText;
const currentNumber1 = parseFloat(current1);

// plus button1 event handler
document.getElementById('plusBtn1').addEventListener('click', function(){
    const amount1 = document.getElementById('amount1').value;
    const amountNumber1 = parseFloat(amount1);
    const totalAmountNumber1 = document.getElementById('amount1').value = amountNumber1 + 1;

    const totalNumber1 = currentNumber1 * totalAmountNumber1;
    document.getElementById('phonePrice').innerText = totalNumber1;
})

// minus button1 event handler
document.getElementById('minusBtn1').addEventListener('click', function(){
    const amount1 = document.getElementById('amount1').value;
    const amountNumber1 = parseFloat(amount1);
    const totalAmountNumber1 = document.getElementById('amount1').value = amountNumber1 - 1;

    const totalNumber1 = currentNumber1 * totalAmountNumber1;
    document.getElementById('phonePrice').innerText = totalNumber1;
})

// current case price event handler

const current2 = document.getElementById('casePrice').innerText;
const currentNumber2 = parseFloat(current2);

// plus button event handler
document.getElementById('plusBtn2').addEventListener('click', function(){
    const amount2 = document.getElementById('amount2').value;
    const amountNumber2 = parseFloat(amount2);
    const totalAmountNumber2 = document.getElementById('amount2').value = amountNumber2 + 1;

    const totalNumber2 = currentNumber2 * totalAmountNumber2;
    document.getElementById('casePrice').innerText = totalNumber2;
})

// minus button event handler
document.getElementById('minusBtn2').addEventListener('click', function(){
    const amount2 = document.getElementById('amount2').value;
    const amountNumber2 = parseFloat(amount2);
    const totalAmountNumber2 = document.getElementById('amount2').value = amountNumber2 - 1;

    const totalNumber2 = currentNumber2 * totalAmountNumber2;
    document.getElementById('casePrice').innerText = totalNumber2;
})



