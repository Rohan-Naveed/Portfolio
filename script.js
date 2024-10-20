"use strict";

const preLoader = document.querySelector(".preLoader");
const preLoadingSec = document.querySelectorAll(".preLoadingSec");
const allSections = document.querySelectorAll(".section");
const aboutSection = document.querySelector(".aboutSection");
const projectSection = document.querySelector(".projectSection");
const form = document.querySelector("form");
const senderFullName = document.getElementById("name");
const senderPhone = document.getElementById("phone");
const senderEmail = document.getElementById("email");
const senderMessage = document.getElementById("message");
const body = document.querySelector("body");
const scrollBtn = document.querySelector(".scrollDown");
const seeProjectsbtn = document.querySelector(".seeProjectsBtn");

// PreLoader
// const PreLoaderTimer = window.addEventListener("load", function () {
//   setTimeout(function () {
//     preLoadingSec.forEach((sec) => (sec.style.opacity = 1));
//     body.style.overflowY = "visible";
//     preLoader.style.display = "none";
//   }, 2000);
// });

const PreLoaderTimer = window.addEventListener("load", function () {
  // preLoadingSec.forEach((sec) => (sec.style.opacity = 1));
  body.style.overflowY = "visible";
  preLoader.style.display = "none";
});

// Reveal section on scroll
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach((sec) => sectionObserver.observe(sec));

// Auto Typing
var typed = new Typed(".typing", {
  strings: ["Front-End Developer.", "Web Designer.", "Programmer."],
  typeSpeed: 175,
  backSpeed: 175,
  loop: true,
});

// Scroll Down Btn
scrollBtn.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

// See Projects Btn
seeProjectsbtn.addEventListener("click", function () {
  projectSection.scrollIntoView({ behavior: "smooth" });
});

// Email Send Functionality
function sendEmail() {
  let msgString = `<h1>Sender's Full Name :</h1>  ${senderFullName.value} <br>
                  <h1>Sender's Phone :</h1>  ${senderPhone.value} <br>
                  <h1>Sender's Email :</h1>  ${senderEmail.value} <br>
                  <h1>Sender's Message :</h1>  ${senderMessage.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "rohan.naveed626899@gmail.com",
    Password: "2E9E5D303028F0A918E035756F9BC4184022",
    To: "rohan.naveed626899@gmail.com",
    From: "rohan.naveed626899@gmail.com",
    Subject: "Message From Personal Portfolio",
    Body: msgString,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
