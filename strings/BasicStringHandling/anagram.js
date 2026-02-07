const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));
console.log(isAnagram("ab", "a"));
console.log(isAnagram("ab", "ba"));
console.log(isAnagram("ab", "ab"));
console.log(isAnagram("ab", "ab"));