/*TweenMax.to(".logo",6,{left:600});
var photo = document.getElementById("logo"); //or use jQuery's $("#photo")
console.log(photo)
TweenLite.to(photo, 1.5, {width:100});*/



function setCenterBtn(value){
  var Btn = document.getElementById('centerBtn');
  Btn.src='images/centerBtn'+value+'.png'
}

function set3dWebBtn(value){
  var Btn = document.getElementById('3dWebBtn');
  Btn.src='images/3dWeb'+value+'.png'
}

function setPrintingBtn(value){
  var Btn = document.getElementById('printingBtn');
  Btn.src='images/printing'+value+'.png'
}

function setVtrBtn(value){
  var Btn = document.getElementById('vtrBtn');
  Btn.src='images/vtr'+value+'.png'
}

function setEventBtn(value){
  var Btn = document.getElementById('EventBtn');
  Btn.src='images/Event'+value+'.png'
}

function setBtn(id,value){
  var Btn = document.getElementById(id);
  Btn.src='images/'+value;
}

function debug(value) {
  document.getElementById("debug").innerHTML = value;
}

function setOpacity(value) {
  var svgBtn = document.getElementsByClassName("svgBtn");
  for (i = 0; i < svgBtn.length; i++) {
    svgBtn[i].style.opacity = value;
  }
}
window.onload = setOpacity(0);
