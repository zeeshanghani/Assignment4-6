//Q1 - Create a function that takes an array, an index, 
//and a value as parameters. Inside the function, 
//use the splice method to insert the value at the 
//specified index in the array. Return the modified array.
let array: string[] = ["math", "urdu", "english", "stat", "comp"]
console.log(array)

function bookNmae(i: number, i2: number, i3: string) 
{
    array.splice(i, i2, i3);
    return array
}
var newArray:string[]=bookNmae(2, 0, "history")
console.log(newArray)

