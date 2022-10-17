let a=-93;
let r=[];
let d=Math.abs(a);
while(d>0)
{
    r.push(d%16);
    d=Math.floor(d/16);
}


for(var i=r.length;i<=7;i++)
{
    r.push(0);
}
var b=[];
for(var i=7;i>=0;i--)
{
    b.push(r[i]);

}
if(a<0)
{
    for(i=0;i<=7;i++)
    {
        b[i]=15-b[i];
    }
}
var c=1;
i=7;
b[7]=15;
b[6]=15;
b[5]=15;
b[4]=3;
while(i>=0)
{
    if(b[i]+c<16)
    {
        b[i]=b[i]+c;
        break;
    }
    d=b[i];
    b[i]=(b[i]+c)%16;
    c=Math.floor((d+c)/16);
    i=i-1;
}
console.log(b);


