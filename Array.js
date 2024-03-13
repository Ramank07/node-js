//Array

const arr=[1,4,3,24,32]
// console.log(arr);
// console.log(arr[1]);

const newArr=new Array(3,2, 4 , 3,4, 3);
// console.log(newArr);
// console.log(newArr[2]);

//Array method

newArr.push(329);
// console.log(newArr);
newArr.pop();
// console.log(newArr);


newArr.unshift(20);//push from front
// console.log(newArr);
newArr.shift();//remove from front side
// console.log(newArr);

// console.log(newArr.includes(3))
// console.log(newArr.indexOf(3));
const arrays= newArr.join()//convert it to string
// console.log(arrays);

//Slice and splice
console.log("A ",newArr);

const newArr1=newArr.slice(1,4);/*just print the full vlaue without including last one and does not changes original array*/
// console.log("B",newArr1);
// console.log("A ",newArr);

const newArr2=newArr.splice(1,4);/*just print the full vlaue with including last one and it changes original array*/
// console.log("c",newArr2);
// console.log("A ",newArr);



