let a = [[1,2,3],[3,4,5,8]];
console.log(a[1][1]);
let b;
for(let i=1;i<a.length;i++)
{
    for(let j=1;j<a.length;j++)
    {
        a[j]+=a[j-1];
        b=a[j];
    }
}
console.log(b);
