class Student {


    constructor(id, name, email, phone, group) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.group = group;
    }

    displayInfo() {
        return `stt: ${this.id} - Name: ${this.name} - Email: ${this.email} - Phone: ${this.phone} - Group: ${this.group}`;
    }
}
