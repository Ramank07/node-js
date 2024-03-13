/*var datatype can be contrain by scope i.e {} once it declare can be used every where  */


if(true){
   var val1=100;
   let val2=20;
   const val3=39;
}
val1=393
let val2=30;
const val3=949;
// console.log(val1);//393
// console.log(val2);//90
// console.log(val3);//949


//scope

 function user(){
   let data="raman"
   function user1(){
      console.log(data);
      let data2= "brother"
   }
   user1()//raman
   // console.log(data2)//cannot be accessed
}

// user()