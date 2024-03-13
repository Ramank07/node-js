//this cannot access within the function

const user1={
    name:"raman",
    price:29,
    greeting:function (){
       console.log( `hello ${this.name} ,welcome back`)
    //    console.log(this)//{ name: 'raman', price: 29, greeting: [Function: greeting] }
    }

}

// user1.greeting()//hello raman ,welcome back
// user1.name="brother"
// user1.greeting()//hello brother ,welcome back
// user1.greeting()
// console.log(this)//{} because it is used in node environment it can be different during browser


/*--function chai(){
    let name="ram"
    console.log(this.name)//cannot acces inside function variable
}
chai()//undefined-----*/


//Arrow function

/*In arrow function if we ise curly braces with must return and when we use pranthesis i.e () then no need to return */

// const val=(num1,num2)=>{
//     let sum=num1+num2
//     return sum
// }
const val=(num1,num2)=>(num1+num2)//7


console.log(val(3,4))

