const dayNumber = 0;
let dayType;

if (dayNumber > 6 || dayNumber < 0) {
    dayType = "invalid";
} else {
    switch (dayNumber) {
        case 0:
            dayType = "weekend";
            break;
        case 6:
            dayType = "weekend";
            break;
        default:
            dayType = "weekday";
            break;
    }
}

console.log(dayType);