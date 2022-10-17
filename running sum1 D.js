let a=[1,2,3,4,5,6];
let b=[];
console.log(a[0]);
for(let i=1;i<a.length;i++)
{
    
     a[i]+=a[i-1];
    b=a[i];
    console.log(b);
}

