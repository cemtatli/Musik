// COUNTDOWN TIMER
let countDownDate = new Date("June 24, 2023 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = `${days}d`;
  document.getElementById("hours").innerHTML = `${hours}h`;
  document.getElementById("minutes").innerHTML = `${minutes}m`;
  document.getElementById("seconds").innerHTML = `${seconds}d`;
});

// MOBILE MENU
const burgerMenu = document.querySelector("#burgerMenu");
const navbarMenu = document.querySelector("#navbar-menu");
burgerMenu.addEventListener("click", function () {
  navbarMenu.classList.toggle("translate-x-full");
  burgerMenu.setAttribute(checked, "true");
});
