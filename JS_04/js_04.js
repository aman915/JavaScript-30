const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

//--------------------------------------------------------------------------------------------------------//
//Array.prototype.filter --> The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//people who were born between 1500 & 1599

var fifteen = inventors.filter(function(inventor) {
  if (inventor.year >= 1500 && inventor.year <= 1599) return true;
});
console.log(fifteen);

//--------------------------------------------------------------------------------------------------------//
//Array.map --> will map according to function definition to whole array and returns the new array
var fullName = inventors.map(function(inventor) {
  return inventor.first + " " + inventor.last;
});
console.log(fullName);

//--------------------------------------------------------------------------------------------------------//
//Array.sort --> if return -1 then a comes first else b

var sortByAge = inventors.sort(function(a, b) {
  // return a.year-b.year;
  if (a.year > b.year) return 1;
  else return -1;
});
console.log(sortByAge);

//--------------------------------------------------------------------------------------------------------//
//Array.prototype.reduce

var totalYears = inventors.reduce(function(total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

//--------------------------------------------------------------------------------------------------------//
//Sort inventors by years lived

var oldest = inventors.sort(function(a, b) {
  return a.passed - a.year - (b.passed - b.year);
});

console.log(oldest);

//--------------------------------------------------------------------------------------------------------//
// sort people by here last name

var sortByLastName = people.sort(function(current, next) {
  var parts = current.split(", ");
});

//--------------------------------------------------------------------------------------------------------//
// count the frequency of each
// we will use Array.prototype.reduce as seen above

var data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

var frequency = data.reduce(function(initial, final){
  if(!initial[final]){
    initial[final] = 0;
  }
  initial[final]++;
  return initial;
},{});

console.log(frequency);