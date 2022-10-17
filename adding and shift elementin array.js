var a=[1,2,3,4,5];
var b=0;
var c=a.length;
for(var i=c;i>=0;i--)
{
    a[i+1]=a[i-1];
}
a[0]=b;
a[1]=9;
console.log(a);