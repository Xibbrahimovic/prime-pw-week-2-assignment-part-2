// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. We are making a variable called 'name' and setting the value of it to string 'Dane'
// Our conditional checks to see if our variable 'name' is equal to Mary and if it is,
// then we then console.log 'Hi, Mary!'
//
//However, if our condition doesn't match that, then we are going to default to
//console.log 'How do you do?'. In this case, we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. We create a variable named 'secret' with no value and another variable
//named code which is set to the value 123.
//We create a condition in which checks to see if code equals 123, if it does, then
// the variable secret is assigned the string 'super'. Additionally, code is multiplied by 2.

//The variable code is then compared to see if it's value is greater than 250, if so
// then the value of secret is assigned the string 'duper'.

//console.log(secret) is then performed to check the value of secret
//
// In this scenario, secret should be super when console.log(secret) is performed because
//the value is only 246.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We are creating 3 variables. isStudent is assigned boolean value of true.
// The variable age is assigned the value 34.
// The variable zip is assigned the value 55407.
//
// We are creating a condition to check if isStudent is true AND if zip is equal to 8000.
// If both conditions are met, then console.log 'You're a student on the West Coast!'
//
// However, if not met, check if isStudent is false AND if age is less than 30.
// If both conditions are met, then console.log 'What are your hobbies?'
//
// If previous two are not met, on those conditions, then check to see if isStudent is equal to true.
// If so, then console.log 'Welcome to Prime!'
//
// Last but not least, if none of those conditions are met, then console.log 'How about the weather?'

//In this case, this code will excecute 'Welcome to Prime!'
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX - colorOne should be set to 'red' and colorTwo should be set to 'blue' as stated
// Additionally, colorTwo should also be added to end of conditional code to be assigned 'purple'

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
//FIX - comments of condtitional states we should have an AND statement, so the CODE
// should read as '&&' not '||' which is read as OR
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

//FIX - There are a couple problems here.
// 1. Condtion should be set to '>=' not '<='
// 2. console.log('Enter') should be the first result and 'no entry' should be on else statement 
*/
