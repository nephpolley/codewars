// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Kata link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272


function high(x){
    // Split string into list of words
    const wordList = x.split(" ");

    // Store alphabet in a list
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

    let bestWord;
    let bestScore = 0;

    // Loop through each word
    for (let word of wordList) {
        // Score of the word starts at 0
        let score = 0;
        
        // Add each character's position to the score
        for (let char of word) {
        score += alphabet.indexOf(char) + 1;
        }
        
        // Update the best score and word
        if (score > bestScore) {
        bestScore = score;
        bestWord = word
        }
    }

    return bestWord
}