// File: index.js

// Function to generate a random number between 0 and 36 (inclusive), representing the roulette wheel
function generateRouletteNumber() {
    return Math.floor(Math.random() * 37);
}

// Function to determine if a number is odd or even
function isOdd(number) {
    return number % 2 !== 0;
}

// Function to determine if a number is red or black
function isRed(number) {
    const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    return redNumbers.includes(number);
}

// Function to determine if a number falls in the range 1-12, 13-24, or 25-36
function determineRange(number) {
    if (number >= 1 && number <= 12) {
        return "1-12";
    } else if (number >= 13 && number <= 24) {
        return "13-24";
    } else {
        return "25-36";
    }
}

// Function to determine if a number falls in the range 1-18 or 19-36
function determineHighLow(number) {
    return number <= 18 ? "1-18" : "19-36";
}

// Function to simulate the odds chance (e.g., every third number)
function isOddsChance(number) {
    return number % 3 === 0;
}

module.exports = {
    generateRouletteNumber,
    isOdd,
    isRed,
    determineRange,
    determineHighLow,
    isOddsChance
};
