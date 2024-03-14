/*the problem that is created by global scope can be handle using IIFI 
(immediately invoke function Expression)it main use to immediatly execute 
funcion */

//()()->first is used for writing defination and second for execution


(function chai(){
    console.log(`hey everbody`)
})();//hey everbody//semicoln is used to stop the executive function


((name)=>{
    console.log(`${name} is my name`)
})("raman");//raman is my name