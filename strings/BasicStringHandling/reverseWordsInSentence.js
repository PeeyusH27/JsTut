let input = "This is a test sentence";

let reveresedSentence = (input) => {
    return input.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.log(reveresedSentence(input));