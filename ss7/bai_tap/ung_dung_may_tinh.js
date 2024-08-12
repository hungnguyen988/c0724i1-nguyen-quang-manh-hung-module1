function cong() {
    let x = +document.getElementById("number1").value;
    let y = +document.getElementById("number2").value;
document.getElementById("result").innerHTML = "RESULT:" + (x + y);
}
function tru() {
    let x = +document.getElementById("number1").value;
    let y = +document.getElementById("number2").value;
document.getElementById("result").innerHTML = "RESULT:" + (x - y);
}
function nhan() {
    let x = +document.getElementById("number1").value;
    let y = +document.getElementById("number2").value;
document.getElementById("result").innerHTML = "RESULT:" + (x*y);
}
function chia() {
    let x = +document.getElementById("number1").value;
    let y = +document.getElementById("number2").value;
document.getElementById("result").innerHTML = "RESULT:" + (x/y);
}
