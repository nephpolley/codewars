// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// Kata link: https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
    return s.substr(
        // Start at the middle index (subtract 1 to account for 0-indexing)
        Math.ceil(s.length / 2 - 1),
        // If even, use the middle 2, otherwise use just the one
        s.length % 2 === 0 ? 2 : 1)
}