//for each loop important

const user=["raman","mota","adi","saket"];
//using for each
   /* user.forEach( function(name){
     console.log(name);
    })*/

//using arrow
    // user.forEach( (name)=>(console.log(name)))


//passing function
/* 
let printMe=function(item){
    console.log(item);
}
     
user.forEach(printMe)
//passing refernce not function i.e printMe()

raman
mota
adi
saket
*/

//*******main use of forEach function****


/*  
user.forEach((item,index,user)=>{
console.log(item,index,user);
})
raman 0 [ 'raman', 'mota', 'adi', 'saket' ]
mota 1 [ 'raman', 'mota', 'adi', 'saket' ]
adi 2 [ 'raman', 'mota', 'adi', 'saket' ]
saket 3 [ 'raman', 'mota', 'adi', 'saket' ]
*/

/*const lang=[
    {
        lan:"cpp",
        code:"c++"
    },
    {
        lan:"javascript",
        code:"js"
    },
    {
        lan:"java",
        code:"java"
    }
]
lang.forEach((item)=>{
    console.log(item.lan,"=",item.code);
})
cpp = c++
javascript = js
java = java
*/