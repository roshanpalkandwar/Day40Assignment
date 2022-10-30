let tailcount=0
let headcount=0
let flipCoin=Math.floor(Math.random()*2);
while (tailcount<=11 || headcount<=11)
{
    
    if(flipCoin==0)
    {
        headcount=+1
    }
    else
    {
        tailcount=+1
    }
}
if(headcount>tailcount)
{
    console.log("Head wins")
}
if(tailcount>headcount)
{
    console.log("Tails wins")
}