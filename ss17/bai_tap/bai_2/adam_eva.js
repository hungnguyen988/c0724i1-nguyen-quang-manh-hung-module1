class Apple {
    constructor(weight = 10) {
        this.weight = weight;
    }

    loseWeight() {
        if (this.weight > 0) {
            this.weight--;
        } else {
            alert("đã hết táo");
            ;
        }
    }
}

class Human {
    constructor(name, gender, weights) {
        this.name = name;
        this.gender = gender;
        this.weights = weights;
    }

    speak(string) {
        alert(this.name + " speak " + string);
    }

    eatApple(apple) {
        if (apple.weight > 0) {
            apple.loseWeight();
            this.weights++;
            alert("khối lượng quả táo :" + apple.weight + "khối lượng người: " + this.weights);
        } else {
            alert("táo này đã hết , bạn chỉ có thể ăn bằng trí tưởng tượng thôi ");
        }
    }

    checkWeightApple(apple) {
        if (apple.weight > 0) {
            alert("khối lượng quả táo : " + apple.weight);
        } else {
            alert("táo này là táo hư vô");
        }
    }

    displayInfor() {
        alert(` tên : ${this.name} ; giới tính : ${this.gender} ; cân nặng : ${this.weights} `);
    }
}

let apple = new Apple();
let human1 = new Human("Nguyễn Văn A", "nam", 55);
let human2 = new Human("Nguyễn Thị B", "nữ", 45);
human1.speak("xin chào mọi người");
human2.speak("hello everybody");
human1.checkWeightApple(apple);
human2.eatApple(apple);
human1.eatApple(apple);
human1.displayInfor();
human2.displayInfor();