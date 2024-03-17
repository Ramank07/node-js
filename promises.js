// it also have a callbsck function ,it come with then() and catch() or we can also use async and await too

// const promiseOne=new Promise(function(resolve,reject){
// //Do Asyn Task
//     setTimeout(function(){
//         console.log("promiseOne worked")
       
//     },1000)
// })//promise created

// promiseOne.then(function(){//promise consume but not connect so inorder to connect use resolve below shown
//     console.log("promise consumed");
// })


// const promiseTwo=new Promise(function(resolve,reject){
//     //Do Asyn Task
//         setTimeout(function(){
//             console.log("promiseOne worked")
//             resolve()//to connect promise with then
//         },1000)
//     }).then(function(){
//         console.log("promiseTwo consumed");
//     })


    //value pass by resolve too which generally object
    // const promiseThree=new Promise(function(resolve,reject){
      
    //     setTimeout(function(){
    //         resolve({name:"ram",email:"ram@mail.com"})
    //     },1000)


    // }).then(function(promiseThreeData){
    //     console.log(promiseThreeData);
    // })//-->o/p={ name: 'ram', email: 'ram@mail.com' }


    // const promiseFour=new Promise(function(resolve,reject){
    //     let error=true;

    //     if(!error){
    //         resolve({name:"ram",email:"ram@mail.com"})
    //     }else {
    //         reject("somthing went wrong")
    //     }
    // })
    // // .then(function(user){
    // //     console.log("data passed");
    // // })
    // // .catch(function(user){
    // //     console.log("data not passed");
    // // })

    // //chaining
    // promiseFour.then(function(user){
    //  console.log(user);
    //  return user.name
    // }).then(function(username){
    //     console.log(username)
    // })//first (then) return and in second it is received and used
    // .catch(function(error){
    //     console.log("something went wrong");
    // })
    // .finally(function(){
    //     console.log("either complete or error");
    // })



    // const promiseFive=new Promise(function(resolve,reject){
    //    setTimeout(function() {let error=true;
    //     if(!error){
    //         resolve({name:"js",code:"123"})
    //     }
    //     else{
    //         reject("somthong went wrong from js")
    //     }},1000)
    // })
    // async function consumepromiseFive(){
    //    try {
    //     const response= await promiseFive
    //    console.log(response);
    //    } catch (error) {
    //     console.log(error);
    //    }
    // }
    // consumepromiseFive()


    // async function allUser (){
    //    try {
    //     const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    //     const data=await response.json()
    //     console.log(data);
    //    } catch (error) {
    //     console.log(error);
    //    }
    // }
    // allUser()
    

    fetch("https://api.github.com/users/hiteshchoudhary")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{console.log(data);})
    .catch((error)=>{
        console.log(error);
    })