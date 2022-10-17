let a=[10,11,12];
let b=1;
let t=0;
while(b<=a.length)
{
    let sum=0;
    for(let i=0;i<=a.length-(b);i++)
    {
         for(let j=i;j<i+b;j++)
         {
            sum += a[j];
         }
        }
        t += sum;
        b += 2;
    }
console.log(t);