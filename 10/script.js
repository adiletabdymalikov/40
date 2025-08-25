function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  
  if (hours < 10) {
    hours = "0" + hours;
  } else if (hours >= 10) {
    hours = hours.toString();
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  } else if (minutes >= 10) {
    minutes = minutes.toString();
  }

  document.getElementById("t").textContent = hours + ":" + minutes;
}


setInterval(updateTime, 1000);


updateTime();