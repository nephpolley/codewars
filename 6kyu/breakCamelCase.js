// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function breakCamelCase(string) {
    let resString = ""
    for (let i of string) {
      if (i.toLowerCase() !== i) {
        resString += " "
      }
      resString += i
    }
    return resString
  }