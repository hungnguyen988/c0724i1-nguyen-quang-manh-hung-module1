function tinhThue() {
    let income = parseFloat(document.getElementById("income").value);
    let thue = 0;

    if (isNaN(income) || income <= 0) {
        alert("Vui lòng nhập số tiền thu nhập hợp lệ!");
    } else if (income <= 5000000) {
        thue = income * 0.05;
    } else if (income <= 10000000) {
        thue = 5000000 * 0.05 + (income - 5000000) * 0.10;
    } else if (income <= 18000000) {
        thue = 5000000 * 0.05 + 5000000 * 0.10 + (income - 10000000) * 0.15;
    } else if (income <= 32000000) {
        thue = 5000000 * 0.05 + 5000000 * 0.10 + 8000000 * 0.15 + (income - 18000000) * 0.20;
    } else if (income <= 52000000) {
        thue = 5000000 * 0.05 + 5000000 * 0.10 + 8000000 * 0.15 + 14000000 * 0.20 + (income - 32000000) * 0.25;
    } else if (income <= 80000000) {
        thue = 5000000 * 0.05 + 5000000 * 0.10 + 8000000 * 0.15 + 14000000 * 0.20 + 20000000 * 0.25 + (income - 52000000) * 0.30;
    } else {
        thue = 5000000 * 0.05 + 5000000 * 0.10 + 8000000 * 0.15 + 14000000 * 0.20 + 20000000 * 0.25 + 28000000 * 0.30 + (income - 80000000) * 0.35;
    }
    document.getElementById("result").innerHTML = "Số tiền thuế thu nhập cá nhân phải nộp là: " + thue + " VND";
}