const day_if = 2;

if (day_if === 1) {
    console.log("MONDAY")
}
else if (day_if === 2) {
    console.log("TUESDAY")
}
else if (day_if === 3) {
    console.log("WEDNESDAY")
}
else if (day_if === 4) {
    console.log("THURSDAY")
}
else if (day_if === 5) {
    console.log("FRIDAY")
} 
else {
    console.log("I NONT KNOW THAT!")
}
// "TUESDAY"

console.log("****************")

const day_switch1 = 2;
switch (day_switch1) {
    case 1:
        console.log("MONDAY");
    case 2:
        console.log("TUESDAY");
    case 3:
        console.log("WEDNESDAY");
    case 4:
        console.log("THURSDAY");
    case 5:
        console.log("FRIDAY");
    default:
        console.log("I NONT KNOW THAT!")
}
/**  
"TUESDAY"
"WEDNESDAY"
"THURSDAY"
"FRIDAY"
**/

console.log("****************")

const day_switch2 = 2;
switch (day_switch2) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    default:
        console.log("I NONT KNOW THAT!")
}
// "TUESDAY"