let t;
let arr=[4,5,8,7,1,2];
for(let i=1;i<arr.length;i++)
{
    let j=i;
    while(j>0 && (arr[j-1]>arr[j]))
    {
        t=arr[j];
        arr[j]=arr[j-1];
        arr[j-1]=t;
        j--;
    }
}
console.log(arr);