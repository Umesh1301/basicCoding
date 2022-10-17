let a=[1,2,4,2,1,5,5,9,9,4,11,11,10000];
let i;
for(let i=0;i<a.length;i++)
{
    let c=0;
    for(let j=0;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
              c=c+1;  
              
        }
    }
      if(c==1)
      {
        console.log(a[i]);
      }

      
      
    }
    
