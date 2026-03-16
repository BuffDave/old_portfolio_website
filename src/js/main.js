// Import our custom CSS
import '../scss/styles.scss'


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// AOS Plugin (guard in case CDN script fails to load)
if (typeof window !== "undefined" && typeof window.AOS !== "undefined") {
  window.AOS.init({
    duration: 1200,
  });
}

// Typed.js Animation (guard in case CDN script fails to load)
setTimeout(function() {
  const hasTypingTarget = document.querySelector(".js-text-animation");

  if (!hasTypingTarget) return;

  if (typeof window !== "undefined" && typeof window.Typed !== "undefined") {
    new window.Typed(".js-text-animation", {
      strings: ["Frontend Developer", "Video Content Creator", "I Miss You"],
      typeSpeed: 60,
      loop: true,
      backSpeed: 25,
      backDelay: 1500
    });
  }
}, 1500);

// Popover Text
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// Mouse-follow Animation
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#212529"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 7 + "px";
    circle.style.top = y - 7 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


