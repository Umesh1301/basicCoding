var n=2;
var prime=true;
if(n==1)
{
    console.log("no prime")
}
else{
for(let i=2;i<n;i++)
{

    if(n%i==0 )
    {
        console.log("not");
            prime=false;
           break;
        
    }
}
    if(prime)
    {
        console.log("prime");
        
    }
    
}