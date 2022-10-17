let a=[1,2,3,4,5,6,8,9,10];
let b=[];

for(let i=1;i<=a.length;i++)
{
    b[i]=a[a.length-i];
    
    console.log(b[i]);
}
