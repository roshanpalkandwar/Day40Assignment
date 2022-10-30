const ps=require('prompt-sync')
const prompt=ps();
console.log("Find prime number or not- ")
let num1 = parseInt(prompt("Enter Lower limit number : "));
let num2 = parseInt(prompt("Enter Upper limit number : "));

for (let i = num1; i <= num2; i++) {
    let flag = 0;

    
    for (let j = 2; j < i; j++) 
    {
        if (i % j == 0) 
        {
            flag = 1;
            break;
        }
    }

    
    if (i > 1 && flag == 0) 
    {
        console.log(i);
    }
}