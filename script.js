const home = document.querySelector(".home");
const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
const sunMoon = document.querySelector(".sunMoon");
sun.addEventListener("click", () => {
  sunMoon.style.animationName = "rotate-90";
  home.classList.add("dayImage");
  setTimeout(() => {
    document.documentElement.style.setProperty("--up", "#00c4ff");
    document.documentElement.style.setProperty("--down", "#0512c7");
    document.documentElement.style.setProperty("--text-color", "rgb(30,20,19)");
  }, 800);
});
moon.addEventListener("click", () => {
  sunMoon.style.animationName = "rotate90";
  home.classList.remove("dayImage");
  setTimeout(() => {
    document.documentElement.style.setProperty("--up", "#023d96");
    document.documentElement.style.setProperty("--down", "rgb(1, 0, 75)");
    document.documentElement.style.setProperty("--text-color", "white");
  }, 800);
});
//  Create Bubble Starts Here
function createBubble() {
  const section = document.querySelector(".seaBack");
  const createElement = document.createElement("span");
  var size = Math.random() * 30;

  createElement.style.width = 15 + size + "px";
  createElement.style.height = 15 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 6500);
}
setInterval(createBubble, 150);
//  Create Bubble Ends Here

// Setting specific project  height for the image dimension
const projectContainer = document.getElementsByClassName("projectContainer");
for (let ele of projectContainer) {
  ele.style.height = `${0.52 * +ele.offsetWidth}px`;
}

// About Me Link At end of the page

const aboutmeLink = document.querySelector("#aboutme-link");
const upButton = document.querySelector("#upButton");
const handleClickOnAboutMe = (event) => {
  event.preventDefault();
  const aboutmePosition = document.querySelector("#main").offsetTop;
  document.querySelector("#main").scrollTo({
    top: aboutmePosition,
    behavior: "smooth",
  });
};
aboutmeLink.addEventListener("click", handleClickOnAboutMe);
upButton.addEventListener("click", handleClickOnAboutMe);


//Scroll Reveal
const containerElement = document.querySelector(".container")
const mainElement = document.querySelector("#main");
const contentHeadings = document.querySelectorAll(".contentHeading")
const leftBoxes = document.querySelectorAll(".left")
const rightBoxes = document.querySelectorAll(".right")
const institutions = document.querySelectorAll(".educationBox")
const socialLinks = document.querySelectorAll(".linksToHandles")
const inputBoxes = document.querySelectorAll(".inputBox")

containerElement.addEventListener("scroll",()=>{
  const bounding = mainElement.getBoundingClientRect();
  const containerHeight = containerElement.offsetHeight;
  if (bounding.top < containerHeight) {
    contentHeadings[0].classList.add('reveal')
    leftBoxes[0].classList.add('reveal')
    rightBoxes[0].classList.add('reveal')
  }
  else{
    contentHeadings[0].classList.remove('reveal')
    leftBoxes[0].classList.remove('reveal')
    rightBoxes[0].classList.remove('reveal')
  }
});

function scrollToReveal(items,revealPoint){
  for(let i of items){
    var mainHeight = window.innerHeight;
    var revealTop = i.getBoundingClientRect().top
    if(i == institutions[0]){
      console.log({revealTop,mainHeight,revealPoint})
    }
    if(revealTop < mainHeight - revealPoint){
      i.classList.add('reveal')
    }
    else{
      i.classList.remove('reveal')
    }
  }
}

mainElement.addEventListener("scroll", () => {
  scrollToReveal(contentHeadings,100)
  scrollToReveal(institutions,0)
  scrollToReveal(leftBoxes,200)
  scrollToReveal(rightBoxes,200)
  scrollToReveal(socialLinks,50)
  scrollToReveal(inputBoxes,0)
});


// Setting Title 

// document.addEventListener('visibilitychange',
// function(){
//     if(document.visibilityState === "visible"){
//         document.title = "Portfolio | Saurav Mukherjee";
//         $("#favicon").attr("href","assests/images/favicon.png");
//     }
//     else {
//         document.title = "Come Back To Portfolio";
        
//     }
// });
