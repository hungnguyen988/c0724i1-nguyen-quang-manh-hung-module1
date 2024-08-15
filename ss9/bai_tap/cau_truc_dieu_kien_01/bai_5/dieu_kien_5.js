let diemKiemTra = parseInt(prompt("nhap diem kiem tra"));
let diemGiuaKy = parseInt(prompt("nhap diem giua ky"));
let diemCuoiKy = parseInt(prompt("nhap diem cuoi ky"));
let diemTrungBinh = (diemKiemTra + diemGiuaKy * 2 + diemCuoiKy * 3) / 6;
if (diemTrungBinh > 8) {
    alert("gioi");
} else if (diemTrungBinh > 6.5) {
    alert("kha");
} else if (diemTrungBinh > 5) {
    alert("tb");
} else {
    alert("yeu");
}