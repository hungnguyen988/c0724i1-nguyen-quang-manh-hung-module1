function chuyenDoiTien() {
    let x = document.getElementById("number").value;
    let a = document.getElementById("from").value;
    let b = document.getElementById("to").value;
    let result;
    if (a == "USD" && b == "VND") {
        result = "RESULT:" + (x*23000) + "Đ";
    }
    else if (a == "VND" && b == "USD") {
        result = "RESULT:" + (x/23000) + "Đ";
    }
    else if (a == "USD") {
        result = "RESULT:" + x + "$";
    }
    else  {
        result = "RESULT:" + x + "Đ";
    }
    alert(result);
}