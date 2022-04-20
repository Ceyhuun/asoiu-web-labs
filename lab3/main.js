document.querySelector('#calc-btn').onclick = function() {
    let a = parseFloat(document.querySelector('#a').value);
    let b = parseFloat(document.querySelector('#b').value);
    let x = parseFloat(document.querySelector('#x').value);

    let y_val = (Math.sin(x ** 2 + a ** 2)) ** 2 - (4 * x) / b;
    let w_val = (x ** 2 * y_val) / a + (Math.cos(x + b)) ** 2;

    document.querySelector('#y').textContent = y_val;
    document.querySelector('#w').textContent = w_val;
}
