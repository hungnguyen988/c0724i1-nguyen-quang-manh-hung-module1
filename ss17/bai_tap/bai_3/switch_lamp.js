class Switch {
    constructor() {
        this.status = false;
    }

    turnOffSwitch() {
        if (this.status) {
            this.status = false;
            alert("đã tắt công tắc");
        } else {
            alert("công tắc đã được tắt từ trước");
        }
    }

    turnOnSwitch() {
        if (!this.status) {
            this.status = true;
            alert("đã bật công tắc");
        } else {
            alert("công tắt đã được bật từ trước");
        }
    }

    connectToLamp(lamp) {
        if (this.status) {
            lamp.turnOnLamp();
        } else {
            lamp.turnOffLamp();
        }
    }
}

class Lamp {
    constructor(name) {
        this.name = name;
        this.statusLamp = false;
    }

    turnOnLamp() {
        if (!this.statusLamp) {
            this.statusLamp = true;
            alert(this.name + " đã bật");
        } else {
            alert(this.name + " đã được bật không cần bật nữa ")
        }
    }

    turnOffLamp() {
        if (this.statusLamp) {
            this.statusLamp = false;
            alert(this.name + " đã được tắt");
        } else {
            alert(this.name + " đã tắt rồi không cần tắt nữa")
        }
    }
}

let switch1 = new Switch();
let lamp1 = new Lamp("đèn ngủ");
let lamp2 = new Lamp("đèn học");

switch1.turnOnSwitch();
switch1.connectToLamp(lamp1);
switch1.connectToLamp(lamp2);

switch1.turnOffSwitch();
switch1.connectToLamp(lamp1);
switch1.connectToLamp(lamp2);
