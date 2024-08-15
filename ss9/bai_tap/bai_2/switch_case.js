function soNgay() {
    let month = +document.getElementById("thang").value;
    switch (month) {
        case 2 :
            document.getElementById("result").innerHTML = "tháng " + month + " có số ngày là 28"
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result").innerHTML = "tháng " + month + " có số ngày là 31"
            break;
        default:
            document.getElementById("result").innerHTML = "tháng " + month + " có số ngày là 30";
            break;
    }
}