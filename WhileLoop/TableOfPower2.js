const ps=require('prompt-sync')
const prompt=ps();
console.log("Power of 2 to get the table-")
let number = parseInt(prompt("Enter the number : "));
let i=1

while(i<number)
{
    let result=(2**i++)
    if(result<256)
    {
        console.log(result)
    }
}