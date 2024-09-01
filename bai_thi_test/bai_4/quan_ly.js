class Computer {
    constructor(code, name1, manufacturer, price) {
        this.code = code;
        this.name1 = name1;
        this.price = price;
        this.manufacturer = manufacturer;
    }

    getCode() {
        return this.code;
    }

    getName1() {
        return this.name1;
    }

    getPrice() {
        return this.price;
    }

    getManufacturer() {
        return this.manufacturer;
    }

    setCode(code) {
        this.code = code;
    }

    setName1(name1) {
        this.name1 = name1;
    }

    setPrice(price) {
        this.price = price;
    }

    setQuantity(manufacturer) {
        this.manufacturer = manufacturer;
    }

    gettoString() {
        return `mã sản phẩm : ${this.code}<br>
                tên san phẩm : ${this.name1}<br>
                tên hãng sản xuất : ${this.manufacturer}<br>
                giá san phẩm : ${this.price}<br>`
    }


}

let listComputer = [
    new Computer('AVG', 'ASUS VIVOBOOK GO', 'ASUS', 1200),
    new Computer('DI', 'DELL INSPIRON', 'DELL', 1000),
    new Computer('HPP', 'HP PAVILION', 'HP', 1300),
]

function listProduct() {
    listComputer.sort((a, b) => a.price - b.price);
    let oDuLieu = "";
    for (let i = 0; i < listComputer.length; i++) {

        oDuLieu += "<tr>";
        oDuLieu += `<td> ${i + 1} </td>`;
        oDuLieu += `<td> ${listComputer[i].code}</td>`;
        oDuLieu += `<td > ${listComputer[i].name1} </td>`;
        oDuLieu += `<td > ${listComputer[i].manufacturer} </td>`;
        oDuLieu += `<td > ${listComputer[i].price} </td>`;

        oDuLieu += "</tr>";
    }
    document.getElementById("list1").innerHTML = oDuLieu;
}

function add() {
    let code = document.getElementById("codeProduce").value;
    let name = document.getElementById("nameProduce").value;
    let price = document.getElementById("priceProduce").value;
    let manufacturer = document.getElementById("manufacturerProduce").value;
    let newProduct = new Computer(code, name, manufacturer, price);
    listComputer.push(newProduct);
    listProduct();

}

listProduct();

