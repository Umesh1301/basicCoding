var a=[1,2,3,4];
let max=a[0];

for(let i=0;i<=a.length;i++)
{
    for(let j=i;j<a.length;j++)
    {
        let sum=0;
        for(let k=i;k<=j;k++)
        {
        sum=sum+a[k];
        }
    
    if(max<sum)
{
    max=sum;
}
    }
}


console.log(max);