//singleton->create by object.create

//oobject literals 
const mySym=Symbol("key1")
const user={
    name:"raman",
    // [mySym]:"myKey",//this is the main syntax and can be done by removing square braces 
    "full name":"r kumar",
    age:17,
    mySym:"key",
    location:"Bit",
    email:"rk@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","tuesday"]
}
// console.log(user.email);//can be accessed by both ways but we use this mainly
// console.log(user["email"]);
// console.log(user["full name"]);//for space type you have to be do this way only
// console.log(user[mySym]);//if symbol in []


user.email="rmana@mail.com"//to change the object value before freeze
// console.log(user.email);
/* Object.freeze(user)//freeze to not to change any element of of object
user.email="raaamana@mail.com"*/
// console.log(user);
user.greeting=function(){
    console.log("gud FERNSDV");
}
console.log(user.greeting());

user.greeting2=function(){
    console.log(`hey every one my name is ${user.name}`);
}
console.log(user.greeting2());