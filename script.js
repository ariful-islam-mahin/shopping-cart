function handleProductChange(product, creaseBtn) {
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if(creaseBtn == true){
        productNewCount = productCount + 1
    }
    else if(creaseBtn == false && productCount >1){
        productNewCount = productCount - 1
    }
    document.getElementById(product + '-count').value= productNewCount;
    let productPrice = 0;
    if(product == 'phone'){
        productPrice = productNewCount * 1219
    }
    else if(product == 'case'){
        productPrice = productNewCount * 59
    }
    document.getElementById(product + '-price').innerText = productPrice;
    calculateTotal()
}

function calculateTotal(params) {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const subtotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subtotal').innerText = subtotal;

    const tax = Math.round(subtotal * 0.1);
    document.getElementById('tax').innerText = tax;

    const total = subtotal + tax;
    document.getElementById('total').innerText = total;
}

function getInputValue(product) {
    return (parseInt(document.getElementById(product + '-count').value))
}
