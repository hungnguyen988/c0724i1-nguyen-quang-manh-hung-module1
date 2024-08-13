function tinh() {
    let x = +document.getElementById("so_luong").value;
    let sanPham = document.getElementById("sanpham").value;
    if (sanPham == "san_pham_a") {
        let hoaHong1 = x * 10000000 * 5 / 100;
        document.getElementById("result").innerHTML = "hoa hong :" + hoaHong1;
    } else {
        let hoaHong2 = x * 8000000 * 4 / 100;
        document.getElementById("result").innerHTML = "hoa hong :" + hoaHong2;
    }
}
