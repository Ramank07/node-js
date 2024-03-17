// const user={
//     name:"raman",
//     email:"raman@gmail.com",
//     isloggedIn:true,

//     userDetail:function(){
//         // console.log("detail has been fetched")
//         // console.log(`username: ${name}`);//it will give error ,we can understand by execution context
//         // console.log(`username: ${this.name}`);//username: raman---this keyword state thw context which name we talking about
//         console.log(this);//o/p----->
//         /*{
//             name: 'raman',
//             email: 'raman@gmail.com',
//             isloggedIn: true,
//             userDetail: [Function: userDetail]
//           } *///this shoews the value accessed by this keyword
//     }
// }

// console.log(user.name);
// user.userDetail();
// console.log(this);//{}-->empty
//this keyword state the current context,it is empty object where we insert with the help of eg:->this.name


function User(userName,loginCount,isloggedIn){
  this.userName=userName,
  this.loginCount=loginCount,
  this.isloggedIn=isloggedIn

  return this
}
const User1=new User("raman",28,true)//new key word gives new instance of object
const User2=new User("amsn",282,true)
console.log(User1);
console.log(User2);