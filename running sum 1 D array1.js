let a=[1,4,2,5,3];
for(let i=1;i<a.length;i++)
{
    a[i]+=a[i-1];
   
}
console.log(a);