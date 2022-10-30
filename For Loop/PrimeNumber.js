const ps=require('prompt-sync')
const prompt=ps();
console.log("Find prime number or not-")
let num = parseInt(prompt("Enter the number : "));
let i=0
let count=0
for (i = 1; i <= num; i++)

{
    if (num % i == 0)                                     
    count = count + 1;
}
if (count == 2)                                            
{
    console.log(num + " is a prime number");

}
else
{
    console.log(num + " is not a prime number");
}
