const clockEl = document.getElementById("clock");
const btnEl = document.querySelectorAll(".btn");
const bodyEl = document.querySelector("body");

let colorEl = " ";

setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  } else if (hour === 0) {
    const currentHour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + am_pm;
  clockEl.innerHTML = currentTime;
}
showTime();

btnEl.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    colorEl = event.target.innerText;

    if (colorEl === "DarkRed") {
      bodyEl.style.backgroundColor = "DarkRed";
    } else if (colorEl === "DarkMagenta") {
      bodyEl.style.backgroundColor = "DarkMagenta";
    } else if (colorEl === "DarkOrange") {
      bodyEl.style.backgroundColor = "DarkOrange";
    }
  });
});
