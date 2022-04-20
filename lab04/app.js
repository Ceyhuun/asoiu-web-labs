function calculate() {
    let m = document.getElementById("m-input").value;
    let c = document.getElementById("c-input").value;
    let t = document.getElementById("t-input").value;
    let b = document.getElementById("b-input").value;
    let y = Math.sqrt(m*Math.tan(t)+Math.abs(c*Math.sin(t))); 
    let w = m*Math.cos(b*t*Math.sin(t))+c*Math.abs(y);
    document.getElementById('result').innerHTML = w;
    console.log(y);
}




function getaVal() {
    const val = document.getElementById('a-input').value;
    console.log(val);
}