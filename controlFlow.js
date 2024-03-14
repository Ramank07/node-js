/*  === this operator also check datatype but == does not check datatype eg:2=="2"->true but 2==="2"->false because of different data type--*/

//false value that are considered false->falsy value

//value are:=  0 , -0 , false , "" , null , undefined, NaN, BigInt 0n

//truthy valuees some eg: function(){} , [] , {}


//nullish Coalescing operator(??):null undefined

let val1;
/*val1=5??10
console.log(val1);//5*/


//  val1=null??2;
// console.log(val1);//2

//  val1=undefined??38;
// console.log(val1);//38

//  val1=undefined??2??383;
// console.log(val1)//2->first will print