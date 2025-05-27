
function showTime() {
  let now = new Date();

  let hrs = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();

  
  if (hrs < 10) hrs = "0" + hrs;
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + secs;

  let currentTime = hrs + ":" + mins + ":" + secs;
  document.getElementById("clock").innerText = currentTime;

  showGreeting(hrs);
}


function showGreeting(hour) {
  let greetingText = "";

  if (hour < 12) {
    greetingText = "Good Morning!";
  } else if (hour < 18) {
    greetingText = "Good Afternoon!";
  } else {
    greetingText = "Good Evening!";
  }

  document.getElementById("greet").innerText = greetingText;
}

function changeTheme() {
  document.body.classList.toggle("dark");
}


setInterval(showTime, 1000);
showTime(); 
