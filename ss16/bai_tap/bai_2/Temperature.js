class Temperature{
    constructor(value) {
        this.value = value;
    }
    set(value){
        this.value = value;
    }
    convertF(){
        let result1 = (this.value*9/5)+32;
        return result1;
    }
    convertKelvin(){
        let result2 = (this.value + 273.15);
        return result2;
    }
}
let temperature1 = new Temperature(25);
alert("chuyển sang độ F : " + temperature1.convertF());
alert("chuyển sang độ Kelvin : " + temperature1.convertKelvin());
temperature1.set(50);
alert("chuyển sang độ F : " + temperature1.convertF());
alert("chuyển sang độ Kelvin : " + temperature1.convertKelvin());