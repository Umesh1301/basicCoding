let a=32;
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
    var c=1;
i=7;

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
}
if(a==0)
{
    for(i=0;i<=7;i++)
    {
        b.push(0);
    }
}

var c=1;
i=7;

while(i>=0)
{
    if(b[i]+c<16)
    {
        d=b[i]+c;
        break;
    }
    d=b[i];
    d=d%16;
    c=Math.floor((d+c)/16);
    i=i-1;
}
i=0;
while(i<8 && b[i]==0)
{
    i=i+1;
}
var ans="";
for(let j=i;j<=7;j++)
{
    if(b[j]>=0 && b[j]<=9)
    {
        ans=ans+b[j];
    }
    else if(b[j]==10)
    {
        ans=ans+'a';
    }
    else if(b[j]==11)
    {
        ans=ans+'b';
    }
    else if(b[j]==12)
    {
        ans=ans+'c';
    }
    else if(b[j]==13)
    {
        ans=ans+'d';
    }
    else if(b[j]==14)
    {
        ans=ans+'e';
    }
    else if(b[j]==15)
    {
        ans=ans+'f';
    }

}
console.log(ans);
console.log(b);


