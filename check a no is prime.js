var n=2;
var prime=0;
if(n==1)
{
    console.log("no prime")
}
else{
for(let i=2;i<n;i++)
{

    if(n%i==0 )
    {
        
    prime=prime+1;
        
        
    }
}
    if(prime>0)
    {
        console.log("not prime");
        
    }
    else
    console.log("prime")
}
    




    
