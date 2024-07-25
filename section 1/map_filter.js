const nums=[1, 4, 16, 36, 65,64, 55,67,66];
const perfect=[];

for(let i of nums){

if(Number.isInteger(i**0.5)){

    perfect.push(i);
}

}
console.log(perfect);

//create a new array containing 10% discounted prices from an array of prices
const prices=[100, 210, 280, 399, 550];
const discounted=[];
for(let p of prices){
discounted.push(p*0.9);
}
console.log(discounted);

//map 

const discountedPrices = prices.map((p)=>{return p* 0.9});
console.log(discountedPrices);

//square

const sqr= nums.map((n))=> {}

//
const prices2 = [ '₹423.23' , '₹123.452' , '₹678.9' , '999.9982' ];
console.log(parseInt('₹423.23'.slice(1)));

//make all tge names uppercase//
const names =['ramu', 'shyamu', 'raju' , 'shyam']
