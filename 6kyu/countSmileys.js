// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Kata link: https://www.codewars.com/kata/583203e6eb35d7980400002a


// return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.filter((face) => {
        // all faces must start with eyes and end with a smile
        if (
        [':', ';'].includes(face.charAt(0)) &&
        [')', 'D'].includes(face.slice(-1))
            ) {
        
        // if face is 2 chars, it's automatically valid
        return face.length === 2 ? true :
                face.length === 3 ?
                    // if it's 3 characters, its middle character must be a nose
                    ['-', '~'].includes(face.charAt(1)) :
                    // otherwise, it is invalid
                    false
        }
    }).length
}