
var finialDate = new Date("sep 19 2021 18:18:00").getTime();

var x = setInterval(function() {
var now=new Date().getTime();
var totalSec=(finialDate-now)/1000;    //it convert milisec to sec by div 1000
const days=Math.floor(totalSec/3600/24);
const hours = Math.floor(totalSec / 3600) % 24;
const mins = Math.floor(totalSec / 60) % 60;
const seconds = Math.floor(totalSec) % 60;
// console.log(seconds);
document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("mins").innerHTML=mins;
document.getElementById("seconds").innerHTML=seconds;

if (totalSec < 0) {
    clearInterval(x);
     alert("Time Out");
    document.getElementById("demo").innerHTML = "EXPIRED";
    totalSec=0;
  }


},1000);


var elem = document.documentElement;
function openFullscreen() {
    elem.requestFullscreen();
}

function closeFullscreen() {
      document.exitFullscreen();
    
}