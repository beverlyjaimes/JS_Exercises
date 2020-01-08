// Warmup-1 -- sleepIn
// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
//
// Examples
//
// sleepIn(true, true) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

function sleepIn(weekday, vacation){
    if (weekday && vacation) {
        return true;
    } else if (!weekday || vacation) {
        return true;
    } else {
        return false;
    }

}

// Warmup-1 -- monkeyTrouble
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
//
//     Examples
//
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

function monkeyTrouble(aSmile, bSmile){
    if (aSmile && bSmile || !aSmile && !bSmile) {
        return true;
    } else {
        return false;
    }
}

// Warmup-1 -- sumDouble
// Given two int values, return their sum. Unless the two values are the same, then return double their sum.
//
//     Examples
//
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

function sumDouble(a, b){
    var sum = a + b;
    if (a === b){
        return sum * 2
    } else {
        return sum;
    }
}

// Warmup-1 -- diff21
// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
//
// Examples
//
// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0

function diff21(n) {
    let diff = 21 - n;
    if (n <= 21) {
        return diff;
    } else if (n > 21) {
        return diff * -2;
    }
}