//Q4 - Write a program that uses a while loop to print the first 
//10 even numbers
let nums:number=1;
let evennum:number=0;

while (nums<10) 
{
    if (nums%2==0) 
    {
        console.log("First 10 even num is",nums)    
    }
    nums++
}