//JavaScript is dynamic type language that interpreted at runtime

//**************TYPE OF DATATYPE*****************

/*Two typw of data type 

1.primitive(Call by Value)=>these dataType are store in STACK;

    7 are there::
    number =>   number,
    string =>   string,
    Boolean=>   boolean,
    Symbol=>    symbol,
    BigInt=>    bigint,
    null=>      object,
    undefined=> undefined


2.Non primitive/reference(pass by refernce i.e address is passed)=>these dataType are store in HEAP;

     3 are there ::
     function=>function,
     object=>   object,
     array=>    object


*/


"use strict"//treat all JS code as newer version



let name="raman"
let age=18
let isLoggedIn=false
let state;

//number=>2 power 56
//bigint=>larger value
//string=""
//boolean=>true/false
//null=>standalone value
//undefine
//symbol=>unique->generally used during react


//object->later on

// console.log(typeof null);//is object type
// console.log(typeof undefined)//is indefined type



//+++++++++++
//                    heap and Stack

// stack->eg:

let person ="raman"
let secPerson=person;
secPerson="mota"
console.log(person);
console.log(secPerson);

//HEAP eg: it changes by reference

let user={
  mail:"rman@gmail.com",
  rollno:88
}

let SecUser=user
SecUser.mail="mota@gmail.com"
console.log(user.mail);
console.log(SecUser.mail);
