
//functions
function addNumsv1(a, b){
return [a+b, a*b]

}
const res = addNumsv1(345, 4356);
console.log(res);
 const[sum, prod] = res;
 console.log(prod, sum);

 //map and filter
 const nums =[1,2,3,4,5,6];

 const newNums=[];
 for(let n of nums){

    newNums.push(n +1);
 }
 console.log(newNums);

 