let a=[1,2,3,4,5];

for(let i=0;i<=a.length;i++)
{
    for(let j=i;j<a.length;j++)
    {
        let s="";
    
    for(let k=i;k<=j;k++)
    {
        s=s+a[k];
    }

console.log(s);
    }
}

