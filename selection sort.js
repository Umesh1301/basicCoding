let t;
let a=[1,4,80,3,-45,2];

for(let i=0;i<a.length;i++)
{
    let min=i;
    for(let j=0;j<=i;j++)
    {
        if(a[j]<a[min])
        {
            min=j;
            t=a[i];
            a[i]=a[min];
            a[min]=t;
        }
    }   
}
console.log(a);