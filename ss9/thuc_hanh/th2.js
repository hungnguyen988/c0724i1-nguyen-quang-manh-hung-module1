function ketqua() {
    let Nam = parseInt(document.getElementById("nam").value);
    let Nu = parseInt(document.getElementById("nu").value);
    let tuoiNam = (Nam - 4) % 12;
    let tuoiNu = (Nu - 4) % 12;
    let canNam = Nam % 10;
    let canNu = Nu % 10;
    let conGiapNam = "";
    let conGiapNu = "";
    let canChoNam = "";
    let canChoNu = "";
    switch (tuoiNam) {
        case 0:
            conGiapNam = "Tý";
            break;
        case 1:
            conGiapNam = "Sửu";
            break;
        case 2:
            conGiapNam = "Dần";
            break;
        case 3:
            conGiapNam = "Mão";
            break;
        case 4:
            conGiapNam = "Thìn";
            break;
        case 5:
            conGiapNam = "Tỵ";
            break;
        case 6:
            conGiapNam = "Ngọ";
            break;
        case 7:
            conGiapNam = "Mùi";
            break;
        case 8:
            conGiapNam = "Thân";
            break;
        case 9:
            conGiapNam = "Dậu";
            break;
        case 10:
            conGiapNam = "Tuất";
            break;
        case 11:
            conGiapNam = "Hợi";
            break;
    }
    switch (tuoiNu) {
        case 0:
            conGiapNu = "Tý";
            break;
        case 1:
            conGiapNu = "Sửu";
            break;
        case 2:
            conGiapNu = "Dần";
            break;
        case 3:
            conGiapNu = "Mão";
            break;
        case 4:
            conGiapNu = "Thìn";
            break;
        case 5:
            conGiapNu = "Tỵ";
            break;
        case 6:
            conGiapNu = "Ngọ";
            break;
        case 7:
            conGiapNu = "Mùi";
            break;
        case 8:
            conGiapNu = "Thân";
            break;
        case 9:
            conGiapNu = "Dậu";
            break;
        case 10:
            conGiapNu = "Tuất";
            break;
        case 11:
            conGiapNu = "Hợi";
            break;
    }
    switch (canNam) {
        case 0:
            canChoNam = "Canh";
            break;
        case 1:
            canChoNam = "Tân";
            break;
        case 2:
            canChoNam = "Nhâm";
            break;
        case 3:
            canChoNam = "Quý";
            break;
        case 4:
            canChoNam = "Giáp";
            break;
        case 5:
            canChoNam = "Ất";
            break;
        case 6:
            canChoNam = "Bính";
            break;
        case 7:
            canChoNam = "Đinh";
            break;
        case 8:
            canChoNam = "Mậu";
            break;
        case 9:
            canChoNam = "Kỷ";
            break;
    }
    switch (canNu) {
        case 0:
            canChoNu = "Canh";
            break;
        case 1:
            canChoNu = "Tân";
            break;
        case 2:
            canChoNu = "Nhâm";
            break;
        case 3:
            canChoNu = "Quý";
            break;
        case 4:
            canChoNu = "Giáp";
            break;
        case 5:
            canChoNu = "Ất";
            break;
        case 6:
            canChoNu = "Bính";
            break;
        case 7:
            canChoNu = "Đinh";
            break;
        case 8:
            canChoNu = "Mậu";
            break;
        case 9:
            canChoNu = "Kỷ";
            break;
    }
    if (tuoiNam == 2 && (tuoiNu == 5 || tuoiNu == 8 || tuoiNu == 11)) {
        document.getElementById("check").innerHTML = canChoNam + "" + conGiapNam + " và " + canChoNu + "" + conGiapNu + " không hợp nhau";
    } else if (tuoiNam == 5 && (tuoiNu == 2 || tuoiNu == 8 || tuoiNu == 11)) {
        document.getElementById("check").innerHTML = canChoNam + "" + conGiapNam + " và " + canChoNu + "" + conGiapNu + " không hợp nhau";
    } else if (tuoiNam == 8 && (tuoiNu == 2 || tuoiNu == 5 || tuoiNu == 11)) {
        document.getElementById("check").innerHTML = canChoNam + " " + conGiapNam + " và " + canChoNu + " " + conGiapNu + " không hợp nhau";
    } else if (tuoiNam == 11 && (tuoiNu == 2 || tuoiNu == 8 || tuoiNu == 5)) {
        document.getElementById("check").innerHTML = canChoNam + " " + conGiapNam + " và " + canChoNu + " " + conGiapNu + " không hợp nhau";
    } else {
        document.getElementById("check").innerHTML = canChoNam + " " + conGiapNam + " và " + canChoNu + " " + conGiapNu + " rất hợp nhau";
    }
}