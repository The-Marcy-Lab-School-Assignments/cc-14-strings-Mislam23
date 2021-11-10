//write your code here
//Algorithm for stripUpperCase
/*
1. declare a function named stripUpperCase with one parameter
2. create a new variable that holds the same string value but is made to upercase & another variable that holds the string
3. iterate from beginning to the end of the string parameter and the new variable
3. check if each index of both strings are equal to each other using strict equality
4. if they're add the index's element that are into a new string
5. return newString
*/

function stripUperCase(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
         let letter = string[i] 
      if (string[i] === string[i].toLowerCase()) {
         newString += string[i]
      }
  }
  return newString
}

console.log(stripUperCase('Hello!'))