/*TweenMax.to(".logo",6,{left:600});
var photo = document.getElementById("logo"); //or use jQuery's $("#photo")
console.log(photo)
TweenLite.to(photo, 1.5, {width:100});*/



function setCenterBtn(value){
  var Btn = document.getElementById('centerBtn');
  Btn.src='images/index/centerBtn'+value+'.png'
}

function set3dWebBtn(value){
  var Btn = document.getElementById('3dWebBtn');
  Btn.src='images/index/3dWeb'+value+'.png'
}

function setPrintingBtn(value){
  var Btn = document.getElementById('printingBtn');
  Btn.src='images/index/printing'+value+'.png'
}

function setVtrBtn(value){
  var Btn = document.getElementById('vtrBtn');
  Btn.src='images/index/vtr'+value+'.png'
}

function setEventBtn(value){
  var Btn = document.getElementById('EventBtn');
  Btn.src='images/index/Event'+value+'.png'
}

function setBtn(id,value){
  var Btn = document.getElementById(id);
  Btn.src='images/index/'+value;
}

function debug(value) {
  document.getElementById("debug").innerHTML = value;
}

function setOpacity(value) {
  var svgBtn = document.getElementsByClassName("svgBtn");
  for (i = 0; i < svgBtn.length; i++) {
    svgBtn[i].style.opacity = value;
    //console.log(svgBtn[i].points)
  }
}
window.onload = setOpacity(0);

function setCenterMain(){
  var main = document.getElementById("main");
  var cMain = document.getElementsByClassName("main");
  console.log(cMain[0].style)
  var contrainer = document.getElementsByClassName("contrainer");
  main.style.top = ((window.innerHeight / 2)-345 ) + "px";
  main.style.left = (window.innerWidth / 2)-420+"px";

}
window.onload = setCenterMain();
