let day1 = new myDate(25,11,1998);
let day2 = new myDate(23,6,2000);
alert(day1.day);
alert(day1.getYear());
alert(day2.getMonth());
alert(day1.getDay());
day1.setDay(5);
alert(day1.getDay());
day2.setDate(1,1,2001);
alert(day2.toString());

