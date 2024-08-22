let mang = [
    ["audi", 1000, 2],
        ["mercedes", 1500, 4],
        ["toyota", 800, 5],
        ["honda", 700, 3]
];


function listProduct() {
    let o = "";
    for (let i=0;i<mang.length;i++){
        o += "<tr>";
        o += "<td>";
        o += i + 1;
        o += "</td>";
        for (let j=0; j<mang[i].length; j++){
            o += "<td>";
            o += mang[i][j];
            o += "</td>";
        }
        o += "<td>";
        o += `<button onclick="xoa(${i})">Delete</button>`;
        o += `<button onclick="layDuLieuSua(${i})">Update</button>`;
        o += "</td>";
        o += "</tr>";

    }


    document.getElementById("list1").innerHTML = o;
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
function xoa(i){
    if (confirm("bạn có chắc chăắn muốn xóa")){
        mang.splice(i,1);
        listProduct();
    }

}
function layDuLieuSua(i){
    let sanPham = mang[i];
    document.getElementById("nhap").value = sanPham;
    document.getElementById("luu_tam").value = i;

}
function sua(){
    let i = document.getElementById("luu_tam").value;
    let sanPhamMoi = document.getElementById("nhap").value;
    mang[i] = sanPhamMoi;
    listProduct();
}
