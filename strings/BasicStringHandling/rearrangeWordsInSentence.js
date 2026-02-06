var arrangeWords = function(text) {
    let words = text.split(' ');
    words = words.map(word => word.toLowerCase());
    words.sort((a, b) => a.length - b.length);
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    return words.join(' ');
};

console.log(arrangeWords("Leetcode is cool"));
console.log(arrangeWords("Keep calm and code on"));
console.log(arrangeWords("To be or not to be"));