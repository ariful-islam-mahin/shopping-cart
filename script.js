// subtotal, tax, total
var subtotal = document.getElementById('subtotal');
var tax = document.getElementById('tax');
var total = document.getElementById('total')

// minus function
function minus(price, inputId, priceId) {
    inputNumber = parseFloat(inputId.value);
    inputNumber --;
    inputId.value = inputNumber;
    priceId.innerText = price * parseFloat(inputId.value);
    subtotal.innerText = parseFloat(price1.innerText) + parseFloat(price2.innerText);
    tax.innerText = parseFloat(subtotal.innerText) / 100;
    total.innerText = parseFloat(subtotal.innerText) + parseFloat(tax.innerText)
}

// plus function
function plus(price, inputId, priceId) {
    inputNumber = parseFloat(inputId.value);
    inputNumber ++;
    inputId.value = inputNumber;
    priceId.innerText = price * parseFloat(inputId.value);
    subtotal.innerText = parseFloat(price1.innerText) + parseFloat(price2.innerText);
    tax.innerText = parseInt(subtotal.innerText/ 100) ;
    total.innerText = parseFloat(subtotal.innerText) + parseFloat(tax.innerText)
}

// phone price calculation
var minusBtn1 = document.getElementById('minusBtn1');
var plusBtn1 = document.getElementById('plusBtn1');
var input1 = document.getElementById('input1');
var price1 = document.getElementById('price1');

document.getElementById('minusBtn1').addEventListener('click', function(){
    minus(1219, input1, price1)
})
document.getElementById('plusBtn1').addEventListener('click', function(){
    plus(1219, input1, price1)
})

// case price calculation
var minusBtn2 = document.getElementById('minusBtn2');
var plusBtn2 = document.getElementById('plusBtn2');
var input2 = document.getElementById('input2');
var price2 = document.getElementById('price2');

document.getElementById('minusBtn2').addEventListener('click', function(){
    minus(9, input2, price2)
})
document.getElementById('plusBtn2').addEventListener('click', function(){
    plus(9, input2, price2)
})


