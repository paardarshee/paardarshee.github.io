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
  }, 800);
});
moon.addEventListener("click", () => {
  sunMoon.style.animationName = "rotate90";
  home.classList.remove("dayImage");
  setTimeout(() => {
    document.documentElement.style.setProperty("--up", "#023d96");
    document.documentElement.style.setProperty("--down", "rgb(1, 0, 75)");
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
    ele.style.height = `${0.45 * +ele.offsetWidth}px`;
}


