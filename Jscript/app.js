const menu = document.querySelector(".menu");
const recenter = document.querySelector(".recenter");
const changeState = document.querySelectorAll(".changeState");
const subMenu = document.querySelector(".subMenu");
const close = document.querySelector(".closeSubMenu");



let loginForm = document.getElementById("tokenForm");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let tekenErr = document.getElementById("tokenErr")
  let pass = document.getElementById("tokenInput").value;
  let accessToken = pass.trim()
  let sectionID = document.getElementById("sectionID");
  let mainID = document.getElementById("mainID");


  if (accessToken === "12346") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("loginTime", Date.now());

    sectionID.setAttribute("hidden", "hidden")
    mainID.removeAttribute("hidden")



    // 30 days in milliseconds
    const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000;

    // Check login status
    if (localStorage.getItem("loggedIn") !== "true") {
      mainID.setAttribute("hidden", "hidden")
      sectionID.removeAttribute("hidden")
    }

    // Get login time
    const loginTime = Number(localStorage.getItem("loginTime"));

    function checkSession() {

      const currentTime = Date.now();

      // Calculate how long the user has been logged in
      const elapsedTime = currentTime - loginTime;

      // Calculate remaining time
      const remainingTime = SESSION_DURATION - elapsedTime;

      // 30 days have passed
      if (remainingTime <= 0) {
        logout();
        return;
      }

      // Convert milliseconds to days/hours/minutes/seconds
      const days = Math.floor(
        remainingTime / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (remainingTime % (1000 * 60)) /
        1000
      );

      
        // console.log(`Session expires in: ${days} days, ${hours} hours, ` +
        //   `${minutes} minutes, ${seconds} seconds`)
                
        // }

// Check every second
setInterval(checkSession, 1000);

// Check immediately
checkSession();


function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("loginTime");
  setTimeout(() => {
    mainID.setAttribute("hidden", "hidden")
    sectionID.removeAttribute("hidden")
  }, 1000);
};
  } else {
  tekenErr.textContent = "Invalid Token"
}
});







let scrollTimeOut;
function displayBlock() {
  for (const data of changeState) {
    data.classList.remove("none")
  }
}
function scroll() {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeOut)
  recenter.classList.remove('none')
  for (const data of changeState) {
    data.classList.add("none")
  }
  scrollTimeOut = setTimeout(() => {
    scroll()
    setTimeout(() => {
      displayBlock()
      recenter.classList.add('none')
    }, 1000);
  }, 5000);
});
recenter.addEventListener("click", () => {
  clearTimeout(scrollTimeOut)
  displayBlock()
})
document.addEventListener("DOMContentLoaded", displayBlock)

const lPages = [
  "./Images/landingPage2.png",
  "./Images/landingPage.png",
  "./Images/landingPage3.png",
  "./Images/landingPage4.png"
];
let lPsge = lPages[Math.floor(Math.random() * lPages.length)];

let homePage = document.querySelector(".landingPageImg");

homePage.src = lPsge;











// menu.addEventListener("click", () => {
//   subMenu.classList.toggle("h-72");
// });

// close.addEventListener("click", () => {
//   subMenu.classList.toggle("h-72");
// });

const riders = [
  "Emmanuel ⭐ 4.3",
  "Max ⭐ 4.2",
  "Chinedu ⭐ 4.2",
  "Chukwuemeka ⭐ 4.3",
  "Ifeanyi ⭐ 4.4",
  "Okeke ⭐ 4.5",
  "Uche ⭐ 4.6",
  "Nwosu ⭐ 4.7",
  "Josephine ⭐ 4.8",
  "Joel ⭐ 4.9",
  "SSIB ⭐ 5.0",
  "Rex ⭐ 4.1",
  "Chioma ⭐ 4.0"
];
let j = riders[Math.floor(Math.random() * riders.length)];

let rider1 = document.querySelector(".first-rider");
// let rider2 = document.querySelector(".seceond-rider");

rider1.innerHTML = j;
// rider2.innerHTML = j;

// const prices = [
//   "14,034.89",
//   "15,034.89",
//   "16,034.89",
//   "17,034.89",
//   "18,034.89",
//   "19,034.89",
//   "20,034.89",
// ];

// let priceContainers = document.querySelector(".price-container");
// priceContainers.innerHTML = prices[Math.floor(Math.random() * prices.length)];



// function getName() {
//   let disapear = document.querySelector(".disapear");

//   if (scrollY > 150) {

//     disapear.classList.add("hidden");
//   } else {
//     disapear.classList.remove("hidden");
//   }
// }

// window.addEventListener("scroll", getName);



