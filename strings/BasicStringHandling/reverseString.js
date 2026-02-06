let input = "Hello, World!";

let reversInput = (input) => {
    return input.split('').reverse().join('');
}

console.log(reversInput(input));

// OR
let reverseInput = (input) => {
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
}