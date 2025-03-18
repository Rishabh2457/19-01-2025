let low = 1, high = 100, mid;
alert("Think of a number between 1 and 100");

while (low < high) {
    mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number greater than ${mid}? (yes/no)`);
    
    if (response === "yes") low = mid + 1;
    else high = mid;
}

console.log("Your magic number is: " + low);
