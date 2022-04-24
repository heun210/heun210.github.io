const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#id");
//const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector(".user-greeting");
const logoutForm = document.querySelector("#logout-form");
const loginArea = document.querySelector(".login-area");
const main = document.querySelector("#main");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const usernameWrite = loginInput.value;
  //loginForm.classList.add(HIDDEN);
  localStorage.setItem("USERNAME_KEY", usernameWrite);
  //greeting.innerText = `Hello ${usernameWrite}`;
  //greeting.classList.remove(HIDDEN);
  greetingUsername(usernameWrite);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("USERNAME_KEY");

function greetingUsername(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN);
  loginForm.classList.add(HIDDEN);
  loginArea.style.cssText = `display : none`;
  logoutForm.classList.remove(HIDDEN);
  main.classList.remove(HIDDEN);
}

if (savedUsername !== null) {
  //show the form
  //greeting.innerText = `Hello ${savedUsername}`;
  //greeting.classList.remove(HIDDEN);
  //loginForm.classList.add(HIDDEN);
  greetingUsername(savedUsername);
} else if (savedUsername === null) {
  // show the greeting
}

function onLogOutSubmit() {
  localStorage.removeItem("USERNAME_KEY");
  loginForm.classList.remove(HIDDEN);
  greeting.classList.add(HIDDEN);
  window.location.reload();
  logoutForm.classList.add(HIDDEN);
  loginArea.style.cssText = `display : block`;
  main.classList.add(HIDDEN);
}

logoutForm.addEventListener("submit", onLogOutSubmit);
