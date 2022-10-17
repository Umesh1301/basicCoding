let a=[1,4,2,5,3];
let res=0;
for(let i=0;i<=a.length;i++)
{
    for(let j=i;j<a.length;j++)
    {
        let s="";
        let sum=0;
    for(let k=i;k<=j;k++)
    { s=a[k];
        sum=sum+s;
    }
if(sum%2!=0)
{
    res=res+sum;   
}
    }  
}
console.log(res);