const menu = document.querySelector(".menu");
const recenter = document.querySelector(".recenter");
const changeState = document.querySelectorAll(".changeState");
const subMenu = document.querySelector(".subMenu");
const close = document.querySelector(".closeSubMenu");
const cashTripIcon = document.querySelector(".cash-Trip-Icon-container");
const display = document.querySelector('.time')
const destinationDetails = document.querySelector('.destination-details')
const arrivingTime = document.querySelector('.arrivingTime')
const destination = document.querySelector('.destination')
const realTime = document.querySelector('.realTime')
const homePage = document.querySelector(".landingPageImg");
const destinationMap = document.querySelector('.destinationMap')
const realTimeDestination = document.querySelector('#temo')






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
document.addEventListener("DOMContentLoaded", () => { 
  displayBlock()
  sheet.style.transform = "translateY(100%)";
 })

const destinationMapImgs = [
  "./Images/desImg.jpeg",
  "./Images/desImg2.jpeg",


];
let desHomePageImg = destinationMapImgs[Math.floor(Math.random() * destinationMapImgs.length)];
destinationMap.src = desHomePageImg;


document.querySelector('.arrived-botton').addEventListener("click", () => {
  if (destinationDetails.classList.contains('Arrived-State')) {
    const ratingFlightPriceDiv = document.querySelector(".ratingFlightPriceDiv");
    ratingFlightPriceDiv.classList.add('hidden')
    const riderP = document.querySelector(".riderP");
    riderP.classList.remove('hidden')
    destinationDetails.classList.add('Start-Trip')
    destinationDetails.classList.remove('Arrived-State')
    document.querySelector('.arrived-text').innerHTML = "Start Trip"
    waiting()
  } else if (destinationDetails.classList.contains('Start-Trip')) {
    destinationDetails.classList.remove('Start-Trip')
    destinationDetails.classList.add('End-Trip')
    document.querySelector('.arrived-text').innerHTML = "End Trip"
    document.querySelector('.arrived-botton').classList.add('red-bg')
    startTrip()

  } else if (destinationDetails.classList.contains('End-Trip')) {

    destinationDetails.classList.remove('End-Trip')
    destinationDetails.classList.add('collect-cash')


  } else if (destinationDetails.classList.contains('collect-cash')) {


    window.location.reload()

  }

});
function waiting() {
  let totalSeconds = 5 * 60; // 5 minutes in seconds
  const countdown = setInterval(() => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    if (totalSeconds <= 0) {
      clearInterval(countdown);
      paidWaiting()
    } else {
      totalSeconds--;
      display.textContent = `${formattedMinutes}:${formattedSeconds} Waiting`;
    }
  }, 1000);

}

function paidWaiting() {
  let paidTime = 0
  const clearPaidInterval = setInterval(() => {
    const minutes = Math.floor(paidTime / 60);
    const seconds = paidTime % 60;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    paidTime++;
    display.textContent = `${formattedMinutes}:${formattedSeconds} Paid Waiting`;

  }, 1000);

}
const streets = [

  "Adzope Crescent, Abuja 904101",
  "Agadez Cres, Abuja 904101",
  "Ajesa St, Abuja 904101",
  "Atabara St, Abuja 904101",
  "Bangui St, Abuja 904101",
  "Beira Cres, Abuja 904101",
  "Blantyre Cres, Abuja 904101",
  "Boke Street, Abuja 904101",
  "Buchanan Cres, Abuja 904101",
  "Cairo Cres, Abuja 904101",
  "Casablanca St, Abuja 904101",
  "Dar-Es-Salam St, Abuja 904101",
  "Djibouti Cl, Abuja 904101",
  "Djibouti Street, Abuja 904101",
  "Durban St, Abuja 904101",
  "Freetown St, Abuja 904101",
  "Hombari Cres, Abuja 904101",
  "Katampe Rd, Abuja 904101",
  "Kudang St, Abuja 904101",
  "Kumasi Cres, Abuja 904101",
  "Lambarene Close, Abuja 904101",
  "Lobito Cres, Abuja 904101",
  "Madiana Close, Abuja 904101",
  "Nairobi St, Abuja 904101",
  "Ndjamena Cres, Abuja 904101",
  "Port-Novo St, Abuja 904101",
  "Udi Hill Cl, Abuja 904101",
  "Victoria Garden Cl, Abuja 904101",
  "Yalinga Street, Abuja 904101",
  "Youkou St, Abuja 904101",

]
const currentDestination = streets[Math.floor(Math.random() * streets.length)];

document.querySelector('.street').innerHTML = currentDestination;

function startTrip() {
  cashTripIcon.classList.remove('hidden')
  arrivingTime.classList.remove('hidden')
  display.classList.add('hidden')
  destination.classList.remove('hidden')
  destinationDetails.classList.add('hidden')
  homePage.classList.add('hidden')
  destinationMap.classList.remove('hidden')
  realTimeDestination.innerHTML = currentDestination
  console.log(currentDestination)

}
const lPages = [
  "./Images/landingPage2.png",
  "./Images/landingPage3.png",
  "./Images/landingPage4.png"
];
let lPsge = lPages[Math.floor(Math.random() * lPages.length)];
homePage.src = lPsge;






const ratingPoints = [
  "4.1",
  "4.2",
  "4.3",
  "4.4",
  "4.5",
  "4.6",
  "4.7",
  "4.8",
  "4.9",
  "3.6",
  "3.7",
  "3.8",
  "3.9"
];
let pointValues = ratingPoints[Math.floor(Math.random() * ratingPoints.length)];
const ratingPoint1 = document.querySelector('#rating-point-1')
const ratingPoint2 = document.querySelector('#rating-point-2')
ratingPoint1.innerHTML = pointValues
ratingPoint2.innerHTML = pointValues



function dispTime() {
  const now = new Date();
  // Extract hours, minutes, and seconds
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  // const seconds = String(now.getSeconds()).padStart(2, '0');

  const currentTime = `${hours}:${minutes}`;


  document.querySelector('.realTime').innerHTML = currentTime
  document.querySelector('.realTime2').innerHTML = currentTime


}
dispTime()
const kilos = [
  "41km",
  "42km",
  "43km",
  "44km",
  "45km",
  "36km",
  "37km",
  "38km",
  "39km"
];

let kiloValue = kilos[Math.floor(Math.random() * kilos.length)];
document.querySelector('.dist-meter').innerHTML = kiloValue
const distanceTimes = [
  "33",
  "42",
  "43",
  "44",
  "45",
  "36",
  "37",
  "38",
  "39"
];

let distanceTime = distanceTimes[Math.floor(Math.random() * distanceTimes.length)];
document.querySelector('.distanceTime').innerHTML = distanceTime

const riders = [
  "Emmanuel",
  "Max",
  "Chinedu",
  "Chukwuemeka",
  "Ifeanyi",
  "Okeke",
  "Uche",
  "Nwosu",
  "Josephine",
  "Joel",
  "SSIB",
  "Rex",
  "Chioma"
];
let j = riders[Math.floor(Math.random() * riders.length)];

let rider1 = document.querySelector(".contact1");
let rider2 = document.querySelector(".contact2");

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

let riderPrice = document.querySelector(".old-price");
riderPrice.innerHTML = prices[Math.floor(Math.random() * prices.length)];



const menuBtn = document.querySelector(".menuBtnn");
const closeBtn = document.querySelector(".close");
const sheet = document.querySelector(".sheet");

menuBtn.addEventListener("click", () => {
  sheet.style.transform = "translateY(0%)";
});

closeBtn.addEventListener("click", () => {
  sheet.style.transform = "translateY(100%)";
});

