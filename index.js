const hourEl = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("Seconds");
const ampm = document.getElementById("ampm");

function digitalClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = ampm;

  setTimeout(() => {
    digitalClock();
  }, 1000);
}

digitalClock();
