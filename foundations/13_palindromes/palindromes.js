const palindromes = function (palindrome) {
    const cleanedPalindrome = palindrome.replace(/[!,.]/g, '').toLowerCase().split(' ').join('');
    const reversedPalindrome = cleanedPalindrome.split('').reverse().join('');
    return cleanedPalindrome === reversedPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
