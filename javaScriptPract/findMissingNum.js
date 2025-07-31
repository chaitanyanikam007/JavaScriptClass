// find missing number program
let arr=[1,2,3,5,6,7];
let arrsum=0;
let orgsum=0;
let missingnum;

for(i=0;i<arr.length;i++)
{
 arrsum=arrsum+arr[i];
 }
 for(j=1;j<=arr.length+1;j++)
 {
 orgsum=orgsum+j;
 }
 missingnum=orgsum-arrsum;
 console.log(missingnum)
