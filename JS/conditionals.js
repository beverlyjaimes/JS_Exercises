"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */

//
// let willContinue = confirm("Will you enter a number?");
//
// if (willContinue === false){
//     alert("bye!")
// }
// if (willContinue) {
//
//     // prompt the user for a number
//     let userInput = prompt("What number would you like to enter");
//
//
//     let isNum = !isNaN(userInput);
//
//     if (isNum) {
//
//         let userNum = parseFloat(userInput);
//
//         // alert the following...
//
//         // whether the number is even or odd
//
//         let isEven = userInput % 2 === 0;
//         let isEvenMessage = (isEven) ? "Number is even" : "Number is odd";
//         alert(isEvenMessage);
//
//         // what the number plus 100 is
//
//         alert(userNum + 100);
//
//         // if the number is negative or positive
//
//         let isPos = Math.sign(userNum) === 1;
//         let isPosMessage = (isPos) ? "Number is positive" : "Number is negative";
//         alert(isPosMessage);
//
//
//     } else {
//
//     // otherwise
//         // if what the user enters is not a number, use an alert to tell them that, and
//         // * do *not* display any of the above information.
//         alert("That's not a number!");
//     }
//
//
//
// }




/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

switch (randomColor) {
    case 'red':
        alert(randomColor + 'Love');
        break;
    case 'orange':
        alert(randomColor + 'Orange');
        break;
    case 'yellow':
        alert(randomColor + 'Banana');
        break;
    case 'green':
        alert(randomColor + 'Grass');
        break;
    case 'blue':
        alert(randomColor + 'sad');
         break;
}



/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//create a function with conditionals for 0-5

 const calculatedTotal = (num, bill) => {
     if(num === 0) {
         return alert (bill - 0);
     } else if(num === 1) {
         return alert (bill * ((100-10)/100));
     } else if(num === 2){
         return alert (bill * ((100-25)/100));
     } else if(num === 3){
         return alert(bill * ((100-35)/100));
     } else if(num === 4){
         return alert (bill * ((100-50)/100));
     } else if(num === 5){
         return alert(bill);
     }
};
//
// console.log(calculatedTotal(1,100));
// console.log(calculatedTotal(2,100));
// console.log(calculatedTotal(3,100));
// console.log(calculatedTotal(4,100));
// console.log(calculatedTotal(5,100));




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userBill =  prompt('What is your total bill?');

console.log(calculatedTotal(luckyNumber, userBill));
