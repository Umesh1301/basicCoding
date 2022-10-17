let a=[1,5,6,7,3];
let t;
for(let i=0;i<a.length;i++)
{
   for(let j=0;j<a.length;j++)
   {
    if(a[j]<a[j+1])
    {
        t=a[j];
        a[j]=a[j+1];
        a[j+1]=t;
    }
    
}
   }
   console.log(a); 
   


