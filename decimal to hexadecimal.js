let a=51;
let b="";
let c=0;
while(a>0)
{
    c=a%16;
    if(c<=9)
    {
        c=c+48;
    }
    else{
        c=c+55;
    }
    b=b+c;
    a=Math.floor(a/16);

}
console.log(b);