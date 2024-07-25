const user={
name :'raju',
email:'raju@gmail.com',
password:'abc123',
};

console.log(user.email);
console.log(user['name']);

user.email ='raju007@gmail.com';
user.address ='punjab';
console.log(user);
console.log(user.address);
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const brand ='Samsung';
const model ='S24';
const price =105000;
const colors =['red', 'black', 'white'];

const smartphone = { brand, model, price, colors };
console.log(smartphone);


const{address} = user;
console.log(address);

console.log(smartphone.price);

console.log(smartphone.colors[1]);
smartphone.colors.push ('grey');
console.log(smartphone.colors);

smartphone.colors[2]= 'moonwhite';
console.log(smartphone);


///////////
const smartphoneList =[
{
    brand :'Samsung',
    model :'S24',
    price :105000,
    colors :['red', 'black', 'white'],


},
{
    brand :'OnePlus',
    model :'12',
    price :45000,
    colors :['green', 'gray',],


},

{
    brand :'Apple',
    model :'15',
    price :125000,
    colors :['black', 'white'],


},

{
    brand :'Google',
    model :'Pixel 8',
    price :56000,
    colors :['red', 'blue', 'white'],


},

{
    brand :'Motorola',
    model :'G8',
    price :14999,
    colors :['blue', 'green'],
},


];


//1-access the price of apple iphone.
//2-access the last color of google pixel.

console.log(smartphoneList[2].price);
console.log(smartphoneList[3].colors.flat(-2));
console.log(smartphoneList[3].colors[smartphoneList[3].colors.length-1]);


const myphones = smartphoneList.filter((phone) => {return phone.price<=50000});
console.log(myphones);

//filter all samsung phones
const query ='s';
const samsungphones = smartphoneList.filter((phone) => {return phone.brand.toLowerCase().includes(query.toLowerCase())});
console.log(samsungphones);


//filters all phones with white color

console.log({2, 3, 4}.includes(3));