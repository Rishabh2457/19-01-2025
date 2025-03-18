let heads = 0, tails = 0;

while (heads < 11 && tails < 11) {
    if (Math.random() < 0.5) heads++;
    else tails++;
}

console.log(heads === 11 ? "Heads won 11 times!" : "Tails won 11 times!");
