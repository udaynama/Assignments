const members = [
  { name: "Rakesh Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 41 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

//printing the first Name of the person
const first = members.map(
  (firstName = (value) => {
    return value.name.split(" ").slice(0, -1).join(" ");
  })
);
// console.log(first);

//Make everyone's last names in UPPERCASE in given array of objects
const upperCase = members.map(
  (uCase = (value) => {
    return value.name.split(" ").slice(-1).join(" ").toUpperCase();
  })
);
// console.log(upperCase);

//Get entries where age is between 41-60
const Entries = members.filter(
    (filterByAge = (value) => {
      return    value.age>=41 && value.age<=60;
    })
  );
//   console.log(Entries);



  //Get average age
  remainingArr = members.filter(data => data.age != null);
const avgAge=remainingArr.reduce((value,a)=>{
     return (value + a.age)/remainingArr.length;
},0)
// console.log("123456",avgAge);



  //person with max age and ans 14
// var max = 0;
// const maxAge=members.reduce((value, a) => {
//   if (a.age > max) {
//     value = a.name
//     max = a.age;
//   }
//   return acc;
// }, "")

// console.log(maxAge);


//Divide persons in three groups



//add new members
let latest ={"name" : "uday nama","age" : 20}
members.splice(2,0, latest) 
// console.log(members);


//extract first and second element using destructing
var {name,age} = members[0] 
var {name,age} = members[1];
// console.log(name,age);

//Rename extracted property of object while destructing
const funcThis =members.map(thisValue=(value=>{
    return {name: firstValue,age: secondValue}= value;
})) 
// console.log(funcThis);
//OR
var { name:fullName, ...others } = members[0]
// console.log(fullName);


//Create a new array instance adding a new member at index 0,and keeping existing afterwards
const freshArr = [];
members.forEach(v=> freshArr.push(Object.assign({}, v)));
freshArr.splice(1,0,{"name" : "udit nama","age" : 24});
// console.log(freshArr)

//Extract properties of object using destructuring
var { name, ...others } = members[0]
// console.log(others);



//Create a new object by copying using spread operator
var newMembers=[...members];
objIndex = newMembers.findIndex((obj => obj.age == 17));
newMembers[objIndex].name = "yashveer singh";
// console.log(newMembers);



//Divide persons in three groups, result should look like

var criteria = members.map(item => item.age);
var old = criteria.filter(item => item>=35);
var young = criteria.filter(item => item<=35);
var noAge = members.filter(item => item.age==null);
// const dynamicArray = ["old", "young", "noAge"];
const obj = 
   {
    old: old,
    young: young,
    noAge:noAge
  }
console.log(obj)
