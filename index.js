const dayNumber = 1;
let dayType;

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

console.log(`It is the ${dayType}!`);