let a=[[10,-252,3],[2,-100],[4,45,6]];
let m=a[0][0];
let n=a[0][0];
let s=0;
for(i=0;i<a.length;i++)
{
    for(j=0;j<a.length;j++)
    {
        s=a[i][j];
        if(m<s)
        {
            m=s;
        }
        else{
            if(n>s)
            {
                n=s;
            }
        }
    }
}
console.log(m);
console.log(n);
