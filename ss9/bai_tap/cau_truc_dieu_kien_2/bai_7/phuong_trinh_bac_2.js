let a = parseInt(prompt("nhap a"));
let b = parseInt(prompt("nhap b"));
let c = parseInt(prompt("nhap c"));

if (a!=0) {
    let x=b*b - 4*a*c;
    if (x>0){
        alert("phuong trinh có 2 nghiem : x1= " + (-b+Math.sqrt(x))/(2*a) + " ; x2= " + (-b-Math.sqrt(x))/(2*a));
    } else if (x==0){
        alert("phuong trinh co nghiem kep x= " + -b/(2*a));
    } else {
        alert("phuong trinh vo nghiem");
    }
} else if (c==0 && b==0){
        alert("phuong trinh vo so nghiem");
} else if (b!=0) {
        let x = -c/b;
        alert("phuong trinh co nghiem :" + -c/b);
} else {
        alert("phuong trinh vo nghiem");
}
