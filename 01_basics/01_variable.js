const accountId = 144553
let accountEmail = "snehamodi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"


//accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "24567"
accountCity = "Mandsdaur"
let accountState

/* console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity); */

//rather than this use cons table

console.table([accountEmail , accountId , accountPassword , accountCity, accountState]);

//Prefer not to use var bcz of issue in block and functional scope.
