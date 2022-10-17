let a=[1,4,2,5,3],sum=0;
for(let i=1;i<a.length;i++)
{a[i]+=a[i-1]; 
    sum=a[i];
}
console.log(sum);