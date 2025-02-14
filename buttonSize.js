
const lilSize = document.getElementById("lil-size");
const BigSize = document.getElementById("sizeMore");
BigSize.onclick = function(){

  document.documentElement.style.backgroundColor = "pink";
  document.body.style.backgroundColor = "pink";

}
let size = 20;
lilSize.onclick = function() {
  size += 30;
  BigSize.style.fontSize = size + "px";
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 

  BigSize.style.backgroundColor = randomColor; 
}

function openNewTab(url){
  window.open(url, '_blank');
}