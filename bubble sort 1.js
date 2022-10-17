let a=[9,5,8,2,10,3];
let t;
for(let i=0;i<a.length-2;i++)
{
    for(let j=0;j<a.length-1;j++)
    {
        if(a[j+1]<a[j])
        {
            t=a[j+1];
            a[j+1]=a[j];
            a[j]=t;
        }
    }
}
console.log(a);