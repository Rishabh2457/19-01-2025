// Function to check if a number is a palindrome
function isPalindrome(num) {
    let reversed = Number(num.toString().split("").reverse().join(""));
    return num === reversed;
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to find the palindrome of a number
function getPalindrome(num) {
    return Number(num.toString().split("").reverse().join(""));
}

// Main logic
let num = parseInt(prompt("Enter a number:")); // User input
if (isPrime(num)) {
    console.log(`${num} is Prime.`);
    let palindrome = getPalindrome(num);
    
    if (isPrime(palindrome)) {
        console.log(`Its palindrome ${palindrome} is also Prime.`);
    } else {
        console.log(`Its palindrome ${palindrome} is NOT Prime.`);
    }
} else {
    console.log(`${num} is NOT Prime.`);
}
