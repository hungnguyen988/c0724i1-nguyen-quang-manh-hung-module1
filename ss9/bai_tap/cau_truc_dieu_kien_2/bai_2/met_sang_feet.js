function chuyenDoi() {
    let x = +document.getElementById("dai").value;
    let a = document.getElementById("from").value;
    let b = document.getElementById("to").value;
    if (a == "m" && b == "ft") {
        let result = x * 3.2808;
        document.getElementById("output").innerHTML = result;
    } else if (a == "ft" && b == "m") {
        let result = x/3.2808;
        document.getElementById("output").innerHTML = result;
    } else {
        let result = x;
        document.getElementById("output").innerHTML = result;
    }
}