var cities = [];
var endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
fetch(endpoint).then(function(blob) {
  blob.json().then(function(data) {
   Array.prototype.push.apply(cities, data);
  });
});


function findMatches(wordToMatch, cities){
  return cities.filter(function(place){
      var regex = new RegExp(wordToMatch,'gi');
      return place.city.match(regex) || place.state.match(regex); 
  });
}
 function displayMatches(){
     console.log(this.value);
 }

 var searchInput = document.querySelector('.search');
