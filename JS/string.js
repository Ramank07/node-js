let name="raman"
let repo=1

// console.log("my name is "+name+" and my repo number is "+repo); we donot use this type now

//rather we use ``
// console.log(`My na is ${name} and my repo number is ${repo}`);

let Game =new String("raman")

console.log(Game.length);
console.log(Game[0]);
console.log(Game.toUpperCase());

console.log(Game.charAt(3));
console.log(Game.indexOf('a'));

const substring=Game.substring(0,4)
console.log(substring);

//trim is uses to remove white space
//replace to replace a particular substring
//include to find string present or not