// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Kata link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
    word = word.toLowerCase()
    let resultStr = "";

    for (let char of word) {
        if (word.split(char).length - 1 === 1) {
        resultStr = resultStr.concat("(")
        } else {
        resultStr = resultStr.concat(")")
        }
    }

    return resultStr;
}
