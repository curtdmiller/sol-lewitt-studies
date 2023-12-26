var rotation = 0;

var canvas = document.getElementsByTagName("svg")[0];

var rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect1.setAttribute("x", -1000);
rect1.setAttribute("y", -500);
rect1.setAttribute("width", 3000);
rect1.setAttribute("height", 1000);
rect1.setAttribute("fill", "url(#horizontal)");
rect1.setAttribute("transform-origin", "center center");
canvas.appendChild(rect1);

var rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect2.setAttribute("x", -1000);
rect2.setAttribute("y", 499);
rect2.setAttribute("width", 3000);
rect2.setAttribute("height", 1000);
rect2.setAttribute("fill", "url(#vertical)");
rect2.setAttribute("transform-origin", "center center");
canvas.appendChild(rect2);

function calculateAngle() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var angle = Math.atan(height / width);
  rotation = angle * (180 / Math.PI);
  rect1.setAttribute("transform", "rotate(" + rotation + ")");
  rect2.setAttribute("transform", "rotate(" + rotation + ")");
}

calculateAngle();

window.addEventListener("resize", calculateAngle);
