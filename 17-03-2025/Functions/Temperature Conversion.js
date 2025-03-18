function convertTemp(value, unit) {
    if (unit === "C") return (value * 9/5) + 32;
    if (unit === "F") return (value - 32) * 5/9;
    return "Invalid unit";
}
console.log(convertTemp(100, "C")); // Convert 100°C to °F
console.log(convertTemp(212, "F")); // Convert 212°F to °C
