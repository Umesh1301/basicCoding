let a=[];
    let j=2;
    while(a.length<15)
    {
        let f=true;
        for(let i=2;i<j;i++)
        {
            if(j%i==0)
            {
                f=false;
                break;
            }
        }
            if(f==true)
            {
                a.push(j);
            }
            j++;
        }
        console.log(a);