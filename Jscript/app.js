const menu = document.querySelector(".menu");
const recenter = document.querySelector(".recenter");
const changeState = document.querySelectorAll(".changeState");
const subMenu = document.querySelector(".subMenu");
const close = document.querySelector(".closeSubMenu");


window.onload = () => {
  scrollTo({
    top: 50,
    behavior: "smooth"
  })
};



window.onscroll = () => {
  recenter.classList.remove('none')
  for (const data of changeState) {
    data.classList.add("none")
  }

  clearFunc()

};
function clearFunc() {
  setTimeout(() => {
    recenter.classList.add('none')
    block()
  }, 4000);

}


function block() {
  for (const data of changeState) {
    data.classList.remove("none")
  }
  scrollTo({
    top: 50,
    behavior: 'smooth'
  });

}
recenter.addEventListener("click", block)

menu.addEventListener("click", () => {
  subMenu.classList.toggle("h-72");
});

close.addEventListener("click", () => {
  subMenu.classList.toggle("h-72");
});

const riders = [
  "Emmanuel ⭐ 5.0",
  "Max ⭐ 5.0",
  "Chinedu ⭐ 5.0",
  "Chukwuemeka ⭐ 5.0",
  "Ifeanyi ⭐ 5.0",
  "Okeke ⭐ 5.0",
  "Uche ⭐ 5.0",
  "Nwosu ⭐ 5.0",
  "Josephine ⭐ 5.0",
  "Joel ⭐ 5.0",
  "SSIB ⭐ 5.0",
  "Rex ⭐ 5.0",
  "Chioma ⭐ 5.0"
];
let j = riders[Math.floor(Math.random() * riders.length)];

let rider1 = document.querySelector(".first-rider");
let rider2 = document.querySelector(".seceond-rider");

rider1.innerHTML = j;
rider2.innerHTML = j;

const prices = [
  "14,034.89",
  "15,034.89",
  "16,034.89",
  "17,034.89",
  "18,034.89",
  "19,034.89",
  "20,034.89",
];

let priceContainers = document.querySelector(".price-container");
priceContainers.innerHTML = prices[Math.floor(Math.random() * prices.length)];



function getName() {
  let disapear = document.querySelector(".disapear");

  if (scrollY > 150) {

    disapear.classList.add("hidden");
  } else {
    disapear.classList.remove("hidden");
  }
}

window.addEventListener("scroll", getName);