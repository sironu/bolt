document.addEventListener("DOMContentLoaded", displayBlock)
const menu = document.querySelector(".menu");
const recenter = document.querySelector(".recenter");
const changeState = document.querySelectorAll(".changeState");
const subMenu = document.querySelector(".subMenu");
const close = document.querySelector(".closeSubMenu");

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