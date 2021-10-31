var images = [], x = -1;
images[0] = "assets/images/Banner_1@2x.jpg";
images[1] = "assets/images/Banner_2@2x.jpg";
images[2] = "assets/images/Banner_3@2x.jpg";
images[3] = "assets/images/Banner_4@2x.jpg";

function changeimg() {
    if( x>= 0 && x < 3)
    x+=1;
    else
    x=0;
    document.getElementById("x2").src=images[x];
}
function first() {
    setInterval(changeimg, 3000);
}
