class Rectangle {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }
    setWidth(width){
        this.width = width;
    }
    setHeigth(heigth){
        this.heigth = heigth;
    }
    getWidth(){
        return this.width;
    }
    getHeigth(){
        return this.heigth;
    }
    getArea(){
        let area = (this.width)*(this.heigth);
        return area;
    }
    getPerimeter(){
        let perimeter = 2*(this.width+this.heigth);
        return perimeter;
    }
    draw(canvas) {
        canvas.clearRect(0, 0,500,500);
        canvas.fillStyle = "blue";
        canvas.fillRect(20,20 , this.width, this.heigth);
    }
}
let rectangle1 = new Rectangle(100,50);
document.getElementById("output1").innerHTML = "diện tích hinh chữ nhật : " + rectangle1.getArea();
document.getElementById("output2").innerHTML = "chu vi hinh chữ nhật : " + rectangle1.getPerimeter();

 let canvas = document.getElementById('rectangleCanvas').getContext('2d');

rectangle1.draw(canvas);
rectangle1.setHeigth(200);
rectangle1.setWidth(400);
document.getElementById("output3").innerHTML = "diện tích hinh chữ nhật sau thay đổi : " + rectangle1.getArea();
document.getElementById("output4").innerHTML = "chu vi hinh chữ nhật sau thay đổi : " + rectangle1.getPerimeter();

