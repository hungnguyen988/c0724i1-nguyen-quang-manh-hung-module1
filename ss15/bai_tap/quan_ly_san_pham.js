let mang = ["AUDI", "TOYOTA", "BMW", "MERCEDES", "HONDA"];

function listProduct() {
    let o = "";
    mang.forEach((value, index) => {
        o += "<tr>";
        o += "<td>";
        o += index + 1;
        o += "</td>";
        o += "<td>";
        o += value;
        o += "</td>";
        o += "<td>";
        o += `<button onclick="xoa(${index})">Delete</button>`;
        o += `<button onclick="layDuLieuSua(${index})">Update</button>`;
        o += "</tr>";
    })
    document.getElementById("list").innerHTML = o;
}
listProduct();
function add(){
    let nhapDuLieu = document.getElementById("nhap").value;
    if (nhapDuLieu){
        mang.push(nhapDuLieu);
        listProduct();
        document.getElementById("nhap").value = "";
    } else {
        alert("vui lòng nhập tên sản phẩm");
    }

}
function xoa(index){
    if (confirm("bạn có chắc chăắn muốn xóa")){
        mang.splice(index,1);
        listProduct();
    }

}
function layDuLieuSua(index){
    let sanPham = mang[index];
    document.getElementById("nhap").value = sanPham;
    document.getElementById("luu_tam").value = index;

}
function sua(){
    let index = document.getElementById("luu_tam").value;
    let sanPhamMoi = document.getElementById("nhap").value;
    mang[index] = sanPhamMoi;
    listProduct();
}

