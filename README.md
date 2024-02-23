# Roulette Logic npm Package

![Roulette Wheel]

The Roulette Logic npm Package is a lightweight and easy-to-use Node.js module that provides essential functionalities for simulating a roulette game. This package is designed to assist developers in creating applications or games that involve roulette mechanics.

## Key Features

1. **Random Number Generation:** Generate a random number between 0 and 36, simulating the outcome of a spin on the roulette wheel.
2. **Odd and Even Detection:** Determine whether a given roulette number is odd or even.
3. **Red and Black Identification:** Identify whether a given roulette number corresponds to a red or black slot on the wheel.
4. **Number Range Identification:** Determine the range in which a given roulette number falls (1-12, 13-24, or 25-36).
5. **High and Low Range Detection:** Determine whether a roulette number falls within the high (19-36) or low (1-18) range.
6. **Odds Chance Simulation:** Check if a given roulette number corresponds to an odds chance (e.g., every third number).

## Installation

You can install the Roulette Logic npm Package using npm:

```bash
npm install roulette-logic-generator



const roulette = require('roulette-logic');

// Generate a random roulette number
const randomNumber = roulette.generateRouletteNumber();
console.log("Random Roulette Number:", randomNumber);

// Determine if the number is odd or even
console.log("Is odd?", roulette.isOdd(randomNumber));

// Determine if the number is red or black
console.log("Is red?", roulette.isRed(randomNumber));

// Determine the range of the number
console.log("Range:", roulette.determineRange(randomNumber));

// Determine if the number is in the high (19-36) or low (1-18) range
console.log("High or Low:", roulette.determineHighLow(randomNumber));

// Check if the number falls in the odds chance (e.g., every third number)
console.log("Is odds chance?", roulette.isOddsChance(randomNumber));


License
This project is licensed under the MIT License, which means it is an open-source project and you are free to use, modify, and distribute the code, provided you include the appropriate copyright notice.
