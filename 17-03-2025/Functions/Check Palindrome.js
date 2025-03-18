function isPalindrome(num) {
    let rev = num.toString().split("").reverse().join("");
    return num.toString() === rev;
}
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
