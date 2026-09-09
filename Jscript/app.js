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

// realTime = new Date().getdate()



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

    sectionID.classList.add("hidden")
    mainID.classList.remove("hidden")



    // 30 days in milliseconds
    const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000;

    // Check login status
    if (localStorage.getItem("loggedIn") !== "true") {
      sectionID.classList.remove("hidden")
      mainID.classList.add("hidden")

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


      console.log(`Session expires in: ${days} days, ${hours} hours, ` +
        `${minutes} minutes, ${seconds} seconds`)

    }

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




    // if (destinationDetails.classList.contains('End-Trip')) {
    //   clearInterval(clearPaidInterval);
    //   startTrip()
    // } else {
    //   paidTime++;
    //   display.textContent = `${formattedMinutes}:${formattedSeconds} Paid Waiting`;

    // }
  }, 1000);

}
function startTrip() {
  cashTripIcon.classList.remove('hidden')
  arrivingTime.classList.remove('hidden') 
  display.classList.add('hidden') 
  destination.classList.remove('hidden')
  destinationDetails.classList.add('hidden') 
  homePage.classList.add('hidden')
  destinationMap.classList.remove('hidden')

}
const lPages = [
  "./Images/landingPage2.png",
  "./Images/landingPage3.png",
  "./Images/landingPage4.png"
];
let lPsge = lPages[Math.floor(Math.random() * lPages.length)];
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



// function getName() {
//   let disapear = document.querySelector(".disapear");

//   if (scrollY > 150) {

//     disapear.classList.add("hidden");
//   } else {
//     disapear.classList.remove("hidden");
//   }
// }

// window.addEventListener("scroll", getName);



