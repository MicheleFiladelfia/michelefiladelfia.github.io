let xType = 'img/x.png';
let navType = 'img/nav.png';

if(window.getComputedStyle( document.body ,null).getPropertyValue('background-color')=="rgb(34, 35, 34)"){
  document.getElementById("icon").src = "img/icon_dark.png";
  document.getElementById("nav").src ="img/nav_dark.png";
  navType = 'img/nav_dark.png';
  xType = 'img/x_dark.png';
}

let isNavOpened = false;
function nav() {
  if(!isNavOpened){
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("nav").src = xType;
    let style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: none;}`
    document.head.appendChild(style);
    isNavOpened = true;
  }else{
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("nav").src = navType;
    let style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: inline;}`;
    document.head.appendChild(style);
    isNavOpened = false;
    }
}