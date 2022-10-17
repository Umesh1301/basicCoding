var t,j;
var a=[4,5,8,7,1,0,-81];
for(i=1;i<=a.length-1;i++)
{
    t=a[i];
    j=i;
    while(j>0 && a[j-1]<=t)
    {
        a[j]=a[j-1];
        --j;
    }
    a[j]=t;
}
console.log(a);
