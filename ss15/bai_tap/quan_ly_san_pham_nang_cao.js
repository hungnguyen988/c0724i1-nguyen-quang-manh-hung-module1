let mang = [
    ["audi", 1000, 2],
    ["mercedes", 1500, 4],
    ["toyota", 800, 5],
    ["honda", 700, 3]
];


function listProduct() {
    let oDuLieu = "";
    for (let i = 0; i < mang.length; i++) {
        oDuLieu += "<tr>";
        oDuLieu += "<td>";
        oDuLieu += i + 1;
        oDuLieu += "</td>";
        for (let j = 0; j < mang[i].length; j++) {
            oDuLieu += `<td  onclick="layDuLieuSua(${i},${j})">`;
            oDuLieu += mang[i][j];
            oDuLieu += "</td>";
        }
        oDuLieu += "<td class='btn-delete1'>";
        oDuLieu += `<button onclick="xoa(${i})" class="btn-delete">Delete</button>`;
        oDuLieu += "</td>";
        oDuLieu += "</tr>";

    }


    document.getElementById("list1").innerHTML = oDuLieu;
}

listProduct();

function add() {
    let nhapDuLieu = document.getElementById("nhap").value;
    if (nhapDuLieu) {
        mang1 = nhapDuLieu.split(",");
        mang.push(mang1);
        listProduct();
        document.getElementById("nhap").value = "";
    } else {
        alert("vui lòng nhập tên sản phẩm");
    }

}

function xoa(i) {
    if (confirm("bạn có chắc chắn muốn xóa")) {
        mang.splice(i, 1);
        listProduct();
    }

}

function layDuLieuSua(i, j) {
    document.getElementById("nhap").value = mang[i][j];
    document.getElementById("luu_tam_1").value = i;
    document.getElementById("luu_tam_2").value = j;
}

function sua() {
    let i = document.getElementById("luu_tam_1").value;
    let j = document.getElementById("luu_tam_2").value;
    let thayDoiMoi = document.getElementById("nhap").value;
    mang[i][j] = thayDoiMoi;
    document.getElementById("nhap").value = "";
    listProduct();
}
