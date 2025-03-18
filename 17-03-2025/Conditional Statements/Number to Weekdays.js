let dayNum = 3; // Change this for input
let dayName;

if (dayNum === 0) {
    dayName = "Sunday";
} else if (dayNum === 1) {
    dayName = "Monday";
} else if (dayNum === 2) {
    dayName = "Tuesday";
} else if (dayNum === 3) {
    dayName = "Wednesday";
} else if (dayNum === 4) {
    dayName = "Thursday";
} else if (dayNum === 5) {
    dayName = "Friday";
} else if (dayNum === 6) {
    dayName = "Saturday";
} else {
    dayName = "Invalid day number"; // Handle invalid input
}

console.log(dayName);
