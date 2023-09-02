"use strict";
//Q7 - Create a function that takes an array of numbers as parameter. 
//Use a while loop to calculate and return 
//the sum of all the numbers in the array
var numbers = [2, 2, 2, 2, 2];
function sumofAll(numbers) {
    let totalSum = 0;
    let index = 0;
    while (index < numbers.length) {
        totalSum = totalSum + numbers[index];
        index++;
    }
    return totalSum;
    //console.log(totalSum)
}
var grandtotal = sumofAll(numbers);
console.log(grandtotal);
