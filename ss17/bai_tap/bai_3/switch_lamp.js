class Switch {
    constructor() {
        this.status = false;
        this.lamp = null;
    }

    turnOffSwitch() {
        this.lamp.turnOffLamp();
    }

    turnOnSwitch() {
        this.lamp.turnOnLamp();
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
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
switch1.connectToLamp(lamp1);
switch1.turnOffSwitch();
switch1.turnOnSwitch();