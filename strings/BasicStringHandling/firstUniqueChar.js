const firstUniqueChar = (s) => {
    let charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    return -1;
}

console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("loveleetcode"));
console.log(firstUniqueChar("aabb"));
console.log(firstUniqueChar("aabbc"));
console.log(firstUniqueChar("aabbc"));