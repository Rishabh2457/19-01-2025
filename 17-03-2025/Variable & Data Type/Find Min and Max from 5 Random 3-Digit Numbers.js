let nums = [];
for (let i = 0; i < 5; i++) {
    nums.push(Math.floor(Math.random() * 900) + 100);
}
console.log("Numbers:", nums);
console.log("Min:", Math.min(...nums));
console.log("Max:", Math.max(...nums));
