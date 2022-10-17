let a=[10,11,12];
let sum=0;
for(let i=0;i<a.length;++i)
{
    let b=i+1;
    let c=a.length-i;
    let d=b*c;
    let o =d%2==0? d/2: d/2 +1;
    sum+=o*a[i];
}
console.log(sum);