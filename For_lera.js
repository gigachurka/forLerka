alert("Сыграем?");
document.addEventListener("DOMContentLoaded", function() {

  const btn = document.querySelector('button.NObtn');
  const originalPosition = {x: btn.offsetLeft, y: btn.offsetTop};

  btn.addEventListener("mouseover", moveHover);

  function moveHover(){
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 36;
    const Yrandom = Math.floor(Math.random()*(maxX))+1;
    const Xrandom = Math.floor(Math.random()*maxY)+1;

    btn.style.left = Yrandom + "px";
    btn.style.top = Xrandom + "px";

    setTimeout(function(){
      btn.style.left = originalPosition.x + "px";
      btn.style.top = originalPosition.y + "px";
    }, 2400);
  }


});

function ifYES(url){
  
    window.open(url, '_blank');
  
}

function openNewTab(url){
  window.open(url, '_blank');
}

function moveButton(url){

window.open(url, '_blank');

}
// //500
