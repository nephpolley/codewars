// Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...
// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// Link to kata: https://www.codewars.com/kata/555eded1ad94b00403000071


function SeriesSum(n) {
    // initialize total sum
    let total = 0
    
    // initialize iterations
    let iteration = 1
    
    // begin loop starting at i = 1, until iterations = n, adding 3 to i each time
    for (let i = 1; iteration <= n; i += 3) {
      // add 1 / i to total sum
      total += (1 / i)
      // add 1 to iterations
      iteration += 1
    }
    
    // return formatted total sum
    return String(total.toFixed(2))
  }