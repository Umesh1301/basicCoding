let a=[5,8,4,1,9,0,-12];
let i,t;

for(let i=0;i<a.length;i++)
{
    let min=i;
    for(let j=0;j<a.length;j++)
    {
        if(a[j]>a[min])
        {
            min=j;
            t=a[i];
            a[i]=a[min];
            a[min]=t;
        }
    }
}
console.log(a);