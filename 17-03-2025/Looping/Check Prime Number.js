let num = 7, isPrime = true;
if (num < 2) isPrime = false;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(num + (isPrime ? " is Prime" : " is NOT Prime"));
