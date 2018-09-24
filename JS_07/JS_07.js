const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];
const comments = [
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

//---------------------------------------------------------------------------------------
//Array.some will return booolean that if the function written is satisfied atleast once.

var isAdult = people.some(function(ages) {
  return new Date().getFullYear() - ages.year > 19 ? 1 : -1;
});
console.log(isAdult);

//---------------------------------------------------------------------------------------
//Array.some will return booolean that if the function written is satisfied by the whole array.
var allAdults = people.every(function(ages) {
  return new Date().getFullYear() - ages.year > 19;
});
console.log(allAdults);

//--------------------------------------------------------------------------------------
//Array.find works like filter but give us only single result for what we are looking for and not the subset of arraty like in filter.

var idFind = comments.find(function(comment) {
  if (comment.id === 123523) return true;
});

console.log(idFind);


//--------------------------------------------------------------------------------------
//Array.findIndex method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

var getIndex = comments.findIndex(function(index){
   return index.id == 123523;
});

console.log(getIndex);


