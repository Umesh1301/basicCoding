var a=[4,80,3,0,7,9,5,1,-45];
var t;
for(let i=1;i<a.length;i++)
{
    let max=i;
    for(j=0;j<a.length;j++)
    {
        if(a[j]>a[max])
        {
            t=a[max];
            a[max]=a[j];
            a[j]=t;

        }
    }
}
console.log(a);