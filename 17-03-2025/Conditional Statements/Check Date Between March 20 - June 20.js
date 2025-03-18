let day = 15, month = 4; // Change these for input

if ((month === 3 && day >= 20) || (month === 6 && day <= 20) || (month > 3 && month < 6)) {
    console.log(true);
} else {
    console.log(false);
}
