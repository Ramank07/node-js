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
// console.log("A ",newArr);

const newArr1=newArr.slice(1,4);/*just print the full vlaue without including last one and does not changes original array*/
// console.log("B",newArr1);
// console.log("A ",newArr);

const newArr2=newArr.splice(1,4);/*just print the full vlaue with including last one and it changes original array*/
// console.log("c",newArr2);
// console.log("A ",newArr);



//more function of array

const hero1=["ram","laxman","luv"]
const hero2=["naagraj","doga","saktiman"]

// hero1.push(hero2);//it push as vector in hero1 [ 'ram', 'laxman', 'luv', [ 'naagraj', 'doga', 'saktiman' ] ]
// console.log(hero1);
// const newHero=hero1.concat(hero2);
// console.log(newHero)//[ 'ram', 'laxman', 'luv', 'naagraj', 'doga', 'saktiman' ]

const allHero=[...hero1,...hero2];
// console.log(allHero);//[ 'ram', 'laxman', 'luv', 'naagraj', 'doga', 'saktiman' ]

const arrOnArr=[1,3,4,[4,4,52],34,[23,24,[344,242]]]
const  oneArr=arrOnArr.flat(Infinity)
console.log(oneArr);/*[
    1,  3,  4,  4,   4,
   52, 34, 23, 24, 344,
  242
]*/