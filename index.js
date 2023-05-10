// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don’t forget the space after the closing parentheses!

const createPhoneNumber = (arr) => {
    let endNum = []
    let newPar = []
   newPar.push(...arr.splice(0,3))
   newPar.unshift("(")
   newPar.push(")")
      // console.log("NewPar:",newPar)
    endNum.push(...arr)
    endNum.splice(3, 0, "-")
   // console.log("EndNum", endNum)
   return newPar.join("")  + " " + endNum.join("") 
}

console.log(createPhoneNumber([9,7,2,8,6,7,5,3,0,9]))