"use strict";
//Q No.6.	Q6 - Write a program that uses a function to find the largest element 
//in an array of numbers.
function findLargestElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
var numbers = [10, 5, 8, 20, 3, 15];
var largestNumber = findLargestElement(numbers);
if (typeof largestNumber !== 'undefined') {
    console.log(`The largest number in the array is: ${largestNumber}`);
}
else {
    console.log('The array is empty.');
}
