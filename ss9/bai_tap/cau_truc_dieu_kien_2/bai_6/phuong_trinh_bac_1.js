let a= parseFloat(prompt("nhap a"));
let b= parseFloat(prompt("nhap b"));
if (a==0 && b==0){
    alert("phuong trinh vo so nghiem");
} else if (a!=0) {
    let x = -b/a;
    alert("phuong trinh co nghiem :" + -b/a);
} else {
    alert("phuong trinh vo nghiem");
}