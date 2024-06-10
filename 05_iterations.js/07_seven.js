//reduce 
//shopping card usage
const arr = [1 ,2 ,3]

//const total = arr.reduce(function(acc , currval){
    //console.log(`acc : ${acc} and currval : ${currval}`);
    //return acc+currval
//} , 0)

//console.log(total);

const mytotal = arr.reduce( (acc , curr) => acc + curr , 0)
//console.log(mytotal);


const shoppingcart = [
    {
        itemname: "js",
        price: 1990
    },
    {
        itemname: "cp",
        price: 2000
    },
    {
        itemname: "js",
        price: 2500
    }

]

const add = shoppingcart.reduce((acc , item) =>acc + item.price , 0)

console.log(add);