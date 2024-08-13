function tinh() {
    let phutGoi = +document.getElementById("phut").value;
    let hinhThuc = document.getElementById("hinh_thuc").value;
    if (hinhThuc == "trong nuoc") {
        let tong = phutGoi * 2000;
        alert("cuoc dien thoai:" + tong);
    } else {
        let tong = phutGoi * 3000;
        alert("cuoc dien thoai:" + tong);
    }
}