
setInterval(autoPlay,5000);
var lastIndex = 0;
function autoPlay(){
  lastIndex++;
  if(lastIndex >= 5){
    lastIndex=0;
  }
  playFx(lastIndex);

}

function nextPlay(){
  lastIndex++;
  if(lastIndex >= 5){
    lastIndex = 0;
  }
  playFx(lastIndex);
}

function backPlay(){
  lastIndex--;
  if(lastIndex <= 0){
    lastIndex = 5;
  }
  playFx(lastIndex);
}

var lastZIndex = 0;
function playFx(index){

  var imgSlide = document.createElement("IMG");
  imgSlide.src="images/3dweb/3dweb_"+(index+1)+".jpg";
  imgSlide.className  += "mySlides img-responsive";
  lastZIndex++;
  imgSlide.style.zIndex = lastZIndex;
  var Url = document.createElement("A");
  Url.href = "http://www.bric.co.th/bric_v1.0.5/frontend/web/index.php";
  Url.appendChild(imgSlide);
  Url.className += "Url";
  document.getElementById("slide").appendChild(Url);
  imgSlide.style.display = "block";
  lastIndex = index;//ตั้งค่า lastIndex ให้ตรง กับ autoPlay
  destroyFx();
}

function destroyFx(){
  var countImgSlide = document.getElementsByClassName("mySlides").length;
  if(countImgSlide >= 10){
    document.getElementsByClassName("mySlides")[0].remove();
    document.getElementsByClassName("Url")[0].remove();
  }
}

window.onload = playFx(1);


function setBtnSlide(){
  setTimeout(function(){
    var imgHeight = document.getElementsByClassName("mySlides")[0].height;
    console.log(imgHeight);
    var btnSlide = document.getElementById("btnSlide").style.height = imgHeight + "px";
    var subBtn = document.getElementById("subBtn").style.marginTop  = imgHeight * 0.9 + "px";
    var backPlayBtn = document.getElementById("backPlayBtn").style.top  = imgHeight * 0.9 + "px";
    var nextPlayBtn = document.getElementById("nextPlayBtn").style.marginTop  = imgHeight * 0.9 + "px";
    var btn = document.getElementsByClassName("btn-slide")
    for(i = 0; i < btn.length; i++){
      btn[i].style.fontSize  = imgHeight * 0.025 + "px";
      console.log(imgHeight * 0.03 + "px");
    }


    console.log(btnSlide);
},5);
}
window.onload = setBtnSlide();

function testGetImgsize(){
  var imgHeight = document.getElementsByClassName("mySlides")[0].height;
  console.log(imgHeight);
}
setTimeout(testGetImgsize,5000);
