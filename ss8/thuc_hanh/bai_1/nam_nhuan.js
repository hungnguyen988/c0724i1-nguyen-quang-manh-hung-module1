let x = parseInt(prompt("nhap nam"));
let divesion4 = (x%4==0);
let lapYear = false;
if (divesion4) {
 let division100 =(x%100==0);
 if (division100) {
     let division400 =(x%400==0);
     if (division400) {
         lapYear = true;
     }
 } else {
     lapYear = true;
 }
}
if (lapYear) {
    alert(" năm nhuận");
} else {
    alert("năm không nhuận");
}