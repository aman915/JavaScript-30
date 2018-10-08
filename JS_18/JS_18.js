// to add all the time taked for all videos in tha page

const timenode = Array.from(document.querySelectorAll("[data-time]"));
const seconds = timenode
  .map(function(node) {
    return node.dataset.time;
  })
  .map(function(timeCode) {
    const [minutes, seconds] = timeCode.split(":").map(function(x) {
      return parseFloat(x);
    });
    return minutes * 60 + seconds;
  })
  .reduce(function(total, seconds) {
    return total + seconds;
  }, 0);

let secondsLeft = seconds;
var hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

var min = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, min, secondsLeft);

//videos


var li1 = document.createElement('li'); 
li1.appendChild(document.createTextNode("The total no. of hours,minutes and seconds are => "+ hours + ","  + min + "," + secondsLeft));
document.getElementById('videos').appendChild(li1);
  