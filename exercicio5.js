/*
5) Escreva um programa que inverta os caracteres de um string.
*/
function reverseString(inputString) {
    let reversedString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }

    return reversedString;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log(`String original: ${originalString}`);
console.log(`String invertida: ${reversedString}`);
