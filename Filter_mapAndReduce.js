// const lan=["c++","ruby","js","java"]

// let language=lan.forEach((item)=> {return item})//for each doesnot return value
// console.log(language);

// const num=[1 , 2 , 3 , 4 , 5 , 6]
// const Store=num.filter((item)=> item>2)
// //[ 3, 4, 5, 6 ]//filter function do  return 
// console.log(Store);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const favBook=books.filter((bk)=> 
     bk.genre=="History")
//   console.log(favBook);
  /*
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
  */
 
//map  it also return the value

   let nums=[1 , 2 , 3 , 4 , 5 , 6]

   let newNum=nums.map((item)=>item>10);
//   console.log(newNum);//[ 11, 12, 13, 14, 15, 16 ]

   //********chaining ***

//    let newNum1=nums.map((item)=>item+10).filter((value)=>value>12)
//    console.log(newNum1);//[ 13, 14, 15, 16 ]


//    let newNum2=nums.map((item)=>item+10).map((value)=>value>12)
//    console.log(newNum2);// [ false, false, true, true, true, true ]


   //reduce
const num1=[1 , 2 , 4 , 5 , 7 , 8]


// let ans=num1.reduce(function(acc,iniVal){
// return acc+iniVal
// },0)
// console.log(ans);//27

// //using array

// let ans=num1.reduce((acc,iniVal)=>
//  acc+iniVal
// ,0)
// console.log(ans);//27

let cart=[
    {    
        product:"book1",
        price:999
    },
    {    
        product:"book2",
        price:92
    },
    {    
        product:"book1",
        price:990
    }
]

let total=cart.reduce((acc,item)=>acc+item.price,0)
console.log(total)//2081
