let a= +prompt("nhap a");
let b= +prompt("nhap b");
let c= +prompt("nhap c");
if (a>0 && b>0 && c>0 && (a+b)>c && (b+c)>a && (c+a)>b){
    alert("đây là 3 cạnh tam giác");
} else {
    alert("đây không phải 3 cạnh tam giác");
}