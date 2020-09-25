// DIGITAL CLOCK ==========>>>>>>>>

function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; 
      var t = setTimeout(currentTime, 1000);
  }
  
  function updateTime(k) { 
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

  currentDate();

  // DATE SECTION ============>>>>>>>
  
  function currentDate() {
      var d = new Date();
      var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var wday = weekday[d.getDay()];
  
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var mnth = month[d.getMonth()];
  
    var year = d.getFullYear();
  
    var  day = d.getDate();
  
  document.getElementById("date").innerHTML = day + "   " + mnth + " " + year + " <br> "+ wday;
  }
  
  currentTime();
  
  // BUTTON ONCLICK ============>>>>>>>>
  function show(){
      document.getElementById("date").style.visibility = "visible"
  }
  
  function reset(){
      document.getElementById("date").style.visibility = "hidden"
      document.getElementById("analog").style.display = "none"
      document.getElementById("clock").style.display = "block"
  }
  
  function analog(){
      document.getElementById("analog").style.display = "block"
      document.getElementById("clock").style.display = "none"
  }

// ANALOG CLOCK =============>>>>>>>>>>>>>>>>>>

const secondHand = document.querySelector('.secHand');
const minuteHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');

function setDate(){
  const now = new Date();
   
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  if (secondsDegrees === 90) {
     secondHand.style.transition = 'none';
  } else if (secondsDegrees >= 91) {
     secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'
  }
   
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
   
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000)
