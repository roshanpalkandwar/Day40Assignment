const ps=require('prompt-sync')
const prompt=ps();
console.log("Enter the number to calculate factorial-")
let number = parseInt(prompt("Enter the number : "));
let fact=1
for(let i=1;i<=number;i++)
{
    fact=fact*i

}
console.log("Prime Factorial of "+number+"  is "+fact);
