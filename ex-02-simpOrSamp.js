
/**
 * Ex-02 : simpOrSamp()
 *
 * Write a function called `simpOrSamp` that takes an array of strings as input:
 *   If an element in the array is less than 6 characters, append 'Sampson': e.g. "Homer Sampson"
 *   If an element in the array is 6 characters or longer, append 'Simpson': 'Jessica Simpson'
 *
*/

var simpOrSamp = function(arrayOfStrings) {
  var output = []
  for(var i = 0; i < arrayOfStrings.length; i = i + 1) {
    // console.log(arrayOfStrings)
    if(arrayOfStrings[i].length < 6){
      output.push(arrayOfStrings[i] + ' ' + 'Sampson');
    } else {
      output.push(arrayOfStrings[i] + ' ' + 'Simpson');
    }
  }
  return output
}






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var modifiedNamesList = simpOrSamp(simpList)

console.assert( modifiedNamesList[1] === 'OJ Sampson' )
console.assert( modifiedNamesList[2] === 'Marge Sampson' )
console.assert( modifiedNamesList[5] === 'Maggie Simpson' )
console.assert( modifiedNamesList[0] !== 'Homer Simpson' )
