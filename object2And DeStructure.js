// const user=new Object();//singleton object wher=n declared through constructor

const user={}
user.name="rman"
user.email="rmangmail.com"
// console.log(user);

const newUser={
    mail:"hasgmail.com",
    fullname:{
          name:{
            fname:"ram",
            lname:"lax"
          }
    },
    id:399

}
// console.log(newUser.fullname.name.fname);

const obj1={
    1:"a",2:"b"
}
const obj2={
    3:"a",4:"b"
}

// const obj3=Object.assign({},obj1,obj2);//it show that both object get merged to starting values

const obj3={...obj1,...obj2}

// console.log(obj3);

const user2=[
    {
        id:37,
        name:"ram"
    },
    {
        id:32,
        name:"rama"
    },
    {
        id:36,
        name:"raam"
    },
    {
        id:67,
        name:"aam"
    },
    {
        id:87,
        name:"raman"
    }

]

// console.log(user2[1].name);//rama
// console.log(Object.keys(user));//[ 'name', 'email' ]
// console.log(Object.values(user));//[ 'rman', 'rmangmail.com' ]
// console.log(Object.entries(user));//[ [ 'name', 'rman' ], [ 'email', 'rmangmail.com' ] ]


// console.log(user.hasOwnProperty("names"));//check the property present or not

//destructering

const anotherNewUser={
    name:"pen",
    price:10,
    sellerOfDukkan:"dukkan"
    
}

// anotherNewUser.sellerOfDukkan=> const {sellerOfDukkan:bhaiya}=anotherNewUser
const {sellerOfDukkan:bhaiya}=anotherNewUser//sellerOfDukkan can accessed by calling bhaiya

console.log(bhaiya);