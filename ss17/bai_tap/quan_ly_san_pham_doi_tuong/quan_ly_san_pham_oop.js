class Product {
    constructor(name1, price, quantity) {
        this.name1 = name1;
        this.price = price;
        this.quantity = quantity;
    }
}

class Productlist {
    constructor() {
        this.mang = [
            new Product("A", 1000, 3),
            new Product("B", 1100, 4),
            new Product("C", 1200, 5)
        ];
    }

    listProduct() {
        let oDuLieu = "";
        for (let i = 0; i < this.mang.length; i++) {
            oDuLieu += "<tr>";
            oDuLieu += `<td> ${i + 1} </td>`;
            oDuLieu += `<td > ${this.mang[i].name1} </td>`;
            oDuLieu += `<td > ${this.mang[i].price} </td>`;
            oDuLieu += `<td > ${this.mang[i].quantity} </td>`;
            oDuLieu += `<td class='btn-delete1'>
             <button onclick="product1.delete(${i})" class="btn-delete">Delete</button>
             <button onclick="product1.getData(${i})" class="btn-delete">Update</button>
            </td>`;
            oDuLieu += "</tr>";
        }
        document.getElementById("list1").innerHTML = oDuLieu;
    }

    add() {
        let name = document.getElementById("nameProduce").value;
        let price = document.getElementById("priceProduce").value;
        let quantity = document.getElementById("quantityProduce").value;
        let newProduct = new Product(name, price, quantity);
        this.mang.push(newProduct);
        this.listProduct()
        this.deleteForm()
    }

    delete(i) {
        if (confirm("bạn có chắc chắn muốn xóa")) {
            this.mang.splice(i, 1);
            this.listProduct();
        }

    }

    getData(i) {
        document.getElementById("nameProduce").value = this.mang[i].name1;
        document.getElementById("priceProduce").value = this.mang[i].price;
        document.getElementById("quantityProduce").value = this.mang[i].quantity;
        document.getElementById("idProduce").value = i;
    }

    update() {
        let i = document.getElementById("idProduce").value;
        this.mang[i].name1 = document.getElementById("nameProduce").value;
        this.mang[i].price = document.getElementById("priceProduce").value;
        this.mang[i].quantity = document.getElementById("quantityProduce").value;
        this.listProduct();
        document.getElementById("nameProduce").value = "";
        document.getElementById("priceProduce").value = "";
        document.getElementById("quantityProduce").value = "";
        this.deleteForm();

    }

    deleteForm() {
        document.getElementById("nameProduce").value = "";
        document.getElementById("priceProduce").value = "";
        document.getElementById("quantityProduce").value = "";
    }

}

let product1 = new Productlist();
product1.listProduct();
