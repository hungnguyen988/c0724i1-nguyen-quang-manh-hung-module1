function tinhLai() {
    let tienGoc = parseFloat(document.getElementById("tienGoc").value);
    let soThang = parseInt(document.getElementById("soThang").value);
    let laiSuatHangThang = parseFloat(document.getElementById("laiSuat").value) / 100;
    if (tienGoc > 0 && soThang > 0) {
        let soTienCuoiKy = tienGoc * Math.pow(1 + laiSuatHangThang, soThang);
        document.getElementById("ketQua").innerHTML = "Số tiền cuối kỳ sau " + soThang + " tháng là: " + soTienCuoiKy + " VND"
    } else {
        alert("kiểm tra lại dữ liệu nhập vào");
    }
}