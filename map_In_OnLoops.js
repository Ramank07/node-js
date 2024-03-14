

const map=new Map()//map created

map.set("raman","19")
map.set("aman","39")
map.set("naman","09")

// console.log(map);//Map(3) { 'raman' => '19', 'aman' => '39', 'naman' => '09' }

/*  for (const key of map) {
    console.log(key);
    
}
[ 'raman', '19' ]
[ 'aman', '39' ]
[ 'naman', '09' ]
*/




/*for (const [key,value] of map) {//destructing map
    console.log(key ,":-","value");
    
}
raman :- value
aman :- value
naman :- value
*/


//***We cannot iterate like this in object */

//for object we use (for_In)

let user={
    name:"raman",
    age:19,
    mail:"rkgmail.com"

}


/*for (const key in user) {
    console.log(key);
}
name
age
mail
*/


/*for (const key in user) {
    console.log(`user key is ${key} and value is ${user[key]}`);
}
user key is name and value is raman
user key is age and value is 19
user key is mail and value is rkgmail.com
*/



