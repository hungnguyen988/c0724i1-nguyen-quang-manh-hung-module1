function chuyenDoi() {
    let x = +document.getElementById("nhiet_do").value;
    let a = document.getElementById("from").value;
    let b = document.getElementById("to").value;
    if (a == "doC" && b == "doF") {
        let result = x * 9 / 5 + 32;
        document.getElementById("output").innerHTML = result;
    } else if (a == "doF" && b == "doC") {
        let result = (x - 32) * 5 / 9;
        document.getElementById("output").innerHTML = result;
    } else {
        let result = x;
        document.getElementById("output").innerHTML = result;

    }
}