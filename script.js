// nav js code

const OpenBtn = document.querySelector("#OpenBtn");
const Mobilebar = document.querySelector("#Mobilebar");

function openMenu() {
  Mobilebar.classList.toggle("show_menu");
}

OpenBtn.addEventListener("click", () => {
  openMenu();
});

setInterval(() => {
  let dt = new Date();
  let hours = dt.getHours();
  let minutes = dt.getMinutes().toString().padStart(2, "0");
  let seconds = dt.getSeconds().toString().padStart(2, "0");

  let AmOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, "0");

  document.getElementById("HoursTime").innerText = hours;
  document.getElementById("MinutesTime").innerText = minutes;
  document.getElementById("SecondsTime").innerText = seconds;

  document.getElementById("AmPm").innerText = AmOrPm;
}, 1000);

/*
hours
  if (hours < 10) {
    document.getElementById("HoursTime").innerText = `0${hours}`;
  } else {
    document.getElementById("HoursTime").innerText = hours;
  }

  // minutes
  if (minutes < 10) {
    document.getElementById("MinutesTime").innerText = `0${minutes}`;
  } else {
    document.getElementById("MinutesTime").innerText = minutes;
  }

  // seconds
  if (seconds < 10) {
    document.getElementById("SecondsTime").innerText = `0${seconds}`;
  } else {
    document.getElementById("SecondsTime").innerText = seconds;
  }
*/

