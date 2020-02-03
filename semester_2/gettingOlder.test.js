/**
Given the following object:

const people = [
  {name: "anson", age: 45},
  {name: "brandon", age: 56},

]

Write a function `happyBirthday(arr)` that returns the same object with all person's age property increased by 1. The original `people` array should not be changed
*/

const people = [
  {name: "anson", age: 45},
  {name: "brandon", age: 56},

]
//method 1//

function happyBirthday (arr) {
  let copyOfAnson = {...arr[0]};
  let copyOfBrandon = {...arr[1]};
  copyOfAnson.age += 1;
  copyOfBrandon.age += 1;
  let copyOfPeople = [copyOfAnson,copyOfBrandon]
  return copyOfPeople;
}
console.log(happyBirthday(people));
console.log(people);

//method 2//


function happyBirthday (arr) {
  let jsonCopyOfPeople = JSON.stringify(arr);
  copyOfPeople = JSON.parse(jsonCopyOfPeople);
  copyOfPeople[0].age += 1;
  copyOfPeople[1].age += 1;
  return copyOfPeople;
}

console.log(happyBirthday(people));
console.log(people);
