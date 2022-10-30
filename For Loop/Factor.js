const ps=require('prompt-sync')
const prompt=ps();
console.log("Prime factors of number N : ")
let N = parseInt(prompt("Enter the number : "));
for (let i=1; i*i<=N; i++)
{
    if (N % i == 0)
        {
            console.log(i);
        }
}