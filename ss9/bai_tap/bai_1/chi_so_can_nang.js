let nang = +prompt("nhap so can" , );
let cao = +prompt("nhap chieu cao" , );
let bmi = nang/(cao*cao);
if (bmi<18.5) {
    alert("underweight");
} else if (bmi<25) {
    alert("normal");
} else if (bmi<30) {
    alert("overweight");
}
else  {
    alert("obese");
}