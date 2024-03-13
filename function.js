/*--function user(num1,num2){
    // console.log("raman")
    // return 9+29;
    return num1-num2;
    // console.log("donot execute afer return")
}
// const result=user()
const result=user(2,4)
console.log(result);--*/

/*--function calculate(num){
  return num
}
// calculate(83,839,93)
console.log(calculate(83,839,93));//83--*/


function calculate(...num){//this is know as rest
  return num
}
// calculate(83,839,93)
// console.log(calculate(83,839,93));//[ 83, 839, 93 ]



const user1={
    name:"raman",
    id:229
}

function handleObject(anyObject){
    return anyObject.name;
}

// console.log(handleObject(user1));//raman
console.log(handleObject({name:"mota",
             age:393
}));//mota