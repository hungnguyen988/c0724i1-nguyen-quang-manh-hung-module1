function tinhTienDien() {
    let kwh = parseFloat(document.getElementById("kwh").value);
    let giaDien = 0;
    if (isNaN(kwh) || kwh <= 0) {
        alert("Vui lòng nhập số kWh hợp lệ!");
    }else if (kwh <= 50) {
        giaDien = kwh * 1678;
    } else if (kwh <= 100) {
        giaDien = 50 * 1678 + (kwh - 50) * 1734;
    } else if (kwh <= 200) {
        giaDien = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
    } else if (kwh <= 300) {
        giaDien = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536;
    } else if (kwh <= 400) {
        giaDien = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834;
    } else {
        giaDien = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (kwh - 400) * 2927;
    }
    document.getElementById("result").innerHTML = "Số tiền điện phải trả là: " + giaDien + " VND";
}