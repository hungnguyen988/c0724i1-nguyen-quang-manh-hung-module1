function chuyen_doi_tien() {
    let x = document.getElementById("number").value;
    let a = document.getElementById("from").value;
    let b = document.getElementById("to").value;
    let RESULT;
    if (a == "USD" && b == "VND") {
        RESULT = "RESULT:" + (x*23000) + "Đ";
    }
    else if (a == "VND" && b == "USD") {
        RESULT = "RESULT:" + (x/23000) + "Đ";
    }
    else if (a == "USD") {
        RESULT = "RESULT:" + x + "$";
    }
    else  {
        RESULT = "RESULT:" + x + "Đ";
    }
    alert(RESULT);
}