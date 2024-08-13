let diemKiemTra = parseInt(prompt("nhap diem kiem tra"));
let diemGiuaKy = parseInt(prompt("nhap diem giua ky"));
let diemCuoiKy = parseInt(prompt("nhap diem cuoi ky"));
let tong = (diemKiemTra+diemGiuaKy*2+diemCuoiKy*3)/6;
if (tong >8) {
    alert("gioi");
} else if (tong>6.5) {
    alert("kha");
} else if (tong>5) {
    alert("tb");
}
else {
    alert("yeu");
}