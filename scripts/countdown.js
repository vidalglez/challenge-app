let seconds = 3;
let minutes = 1;
let hours = 0;
let days = 0;

const changeDay = () => {
  //console.log('Seconds value: ', seconds)

  if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) return;
  seconds--;
  if (seconds === -1) {
    if (minutes !== -1) {
      minutes--;
      seconds = 59;
    }
  }
  if (minutes === -1) {
    if (hours !== -1) {
      hours--;
      minutes = 59;
    }
  }

  if (hours === -1) {
    if (days !== -1) {
      days--;
      hours = 23;
    }
  }

  document.querySelector("#seconds").textContent = seconds;
  document.querySelector("#minutes").textContent = minutes;
  document.querySelector("#hours").textContent = hours;
  document.querySelector("#days").textContent = days;
};

setInterval(changeDay, 1000);
