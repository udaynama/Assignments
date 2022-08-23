var _= require('lodash');

const members = [
    { name: "Rakesh Gupta", age: 20 },
    { name: "Yash Jangid", age: 40 },
    { name: "Firoz Khan", age: 41 },
    { name: "Amrit Srivastava", age: 17 },
    { name: "Chandraprakash Sharma" },
    { name: "Swpril Ahuja", age: 45 },
    { name: "Yogesh Khatri", age: 51 },
  ];

  
  //1. Get array of first names of everyone
 const first = _.map(members,(firstName = (value) => {
      return _.join(_.slice(_.split(value.name  ," "),0, -1)," ");
    })
  );
//   console.log(first);

//2. Make everyone's last names in UPPERCASE in given array of objects
const upperCase = _.map(members,
    (uCase = (value) => {
      return _.toUpper( _.join(_.slice(_.split(value.name," "),-1)," "));
    })
  );
//  console.log(upperCase);


//3. Get entries where age is between 41-60
const johnArr = _.filter(members, person => person.age >41 && person.age <60  );
// console.log(johnArr);


//4. Get average age
remainingArr = _.filter(members,data => data.age != null);
const avgAge= _.reduce(remainingArr,(value,a)=>{
    return (value + a.age)/remainingArr.length;
},0)
// console.log(avgAge);

//5. Get Person with maximum age
var max =0;
const personAge = _.reduce(members,(value,a)=>{
    if(a.age> max){
      return max=a.age;
    }
},"")
// console.log(personAge);

//6. Divide persons in three groups, result should look like

var criteria = _.map(members,item => item.age);
var old = _.filter(criteria,item => item>=35);
var young = _.filter(criteria,item => item<=35);
var noAge = _.filter(members,item => item.age==null);
// const dynamicArray = ["old", "young", "noAge"];
const newObj = 
   {
    old: old,
    young: young,
    noAge:noAge
  }
// console.log(newObj)

//7. add a new member to same members array instance at index 2
// var create ={"name" : "nama nama","age" : 20};
var con=_.concat({"name" : "nama nama","age" : 20},members)
  console.log(con);


//8. extract first and second element using destructing

var pulled = _.pullAt(members, [1, 2]);
// console.log(pulled);

//9. Create a new array instance adding a new member at index 0,and keeping existing afterwards

var freshArr = _.cloneDeep(members);
members.forEach(v=> freshArr.push(Object.assign({}, v)));
freshArr.splice(1,0,{"name" : "nikhil nama","age" : 24});
// console.log(freshArr);

//10. Extract properties of object using destructuring
var [name,...other] = _.pullAt(members,[3] );
// console.log(name.name);


//11 and 12. Rename extracted property of object while destructing 
var [name,...other] = _.pullAt(members,[3] );
var {name:unique,age}=name;
// console.log(unique);


//13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
var freshMembers=[...members];
objIndex = _.findIndex(freshMembers,(obj => obj.age == 17));
freshMembers[objIndex].name = "aditya singh";
// console.log(freshMembers);



