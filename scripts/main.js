var images = [],
  x = -1;
images[0] = "assets/images/Banner_1@2x.jpg";
images[1] = "assets/images/Banner_2@2x.jpg";
images[2] = "assets/images/Banner_3@2x.jpg";
images[3] = "assets/images/Banner_4@2x.jpg";

var slide1 = [],
  y = -1,
  z = 0;
slide1[0] = "assets/images/Project_1.jpg";
slide1[1] = "assets/images/Project_2.jpg";
slide1[2] = "assets/images/Project_3.jpg";
slide1[3] = "assets/images/Project_4.jpg";

function changeimg() {
  if (x >= 0 && x < 3)
   x += 1;
  else
   x = 0;
  document.getElementById("x2").src = images[x];
}
function first() {
  setInterval(changeimg, 3000);
}

function apop() {
  if (document.getElementById("navig").style.display == "none") {
    document.getElementById("navig").style.display = "block";
    document.getElementById("opclose").innerHTML = "close";
    document.getElementById("opclose").style.color = "white";
    document.getElementsByTagName("body")[0].style.overflowY="hidden";
  } else {
    document.getElementById("navig").style.display = "none";
    document.getElementById("opclose").innerHTML = "apps";
    document.getElementById("opclose").style.color = "black";
    document.getElementsByTagName("body")[0].style.overflowY="scroll";
  }
}
function right() {
  y = y === slide1.length - 1 ? 0 : y + 1;
  document.getElementById("sq1").src = slide1[y];
  if (y < 3)
    z = y + 1;
  else
    z = 0;
  document.getElementById("sq2").src = slide1[z];
}

function left() {
  y = y <= 0 ? slide1.length - 1 : y - 1;
  document.getElementById("sq1").src = slide1[y];
  if(y < 3)
    z = y + 1;
  else
    z = 0;  
  document.getElementById("sq2").src = slide1[z];
}
