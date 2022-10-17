let a=10000;
let b=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let c=0;
let d="";
while(a>0)
{
    c=a%16;
d=b[c]+d;
a=Math.floor(a/16);

}

console.log(d);

