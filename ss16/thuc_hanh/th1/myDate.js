class myDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    setDay(day) {
        this.day = day;
    }

    setMonth(month) {
        this.month = month;
    }

    setYear(year) {
        this.year = year;
    }

    setDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    toString() {
        let day = this.day.toString().padStart(2, '0');
        let month = this.month.toString().padStart(2, '0');
        let year = this.year.toString();
        return `${day}/${month}/${year}`;
    }

}