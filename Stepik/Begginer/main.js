function testDateTime(a, b) {
    var DayOfWeek = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];

    dateA = new Date();
    dateB = new Date();
    dateA.setTime(Date.parse(a))
    dateB.setTime(Date.parse(b))
    if (Date.parse(a) > Date.parse(b)) {
        return DayOfWeek[dateA.getDay()];
    }
    else {
        return DayOfWeek[dateB.getDay()];
    }
}

let x = ['19 October 1909 10:27', '04 August 1909 00:24'];
let y = ['28 March 1909 00:59', '03 November 1909 06:54'];


for (let i = 0; i < 2; i++) {
  a = x[i];
  b = y[i];
    console.log(testDateTime(a,b))
}


