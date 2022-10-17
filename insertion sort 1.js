// var t,j;
// var a=[4,5,8,7,1,0,-81];
// for(i=1;i<=a.length-1;i++)
// {
//     t=a[i];
//     j=i;
//     while(j>0 && a[j-1]<=t)
//     {
//         a[j]=a[j-1];
//         --j;
//     }
//     a[j]=t;
// }
// console.log(a);
var a=[3,5,9,10,15,0];
max=a[0];
for(i=0;i<=5;i++)
{
    if(max<=a[i])
    max=a[i];
}
console.log(max);
