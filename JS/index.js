let xType = 'img/x.png';
let menuType = 'img/menu.png';
let isMenuOpened = false;

if(window.getComputedStyle( document.body ,null).getPropertyValue('background-color')=="rgb(34, 35, 34)"){
  document.getElementById("icon").src = "img/icon_dark.png";
  document.getElementById("menu").src ="img/menu_dark.png";
  menuType = 'img/menu_dark.png';
  xType = 'img/x_dark.png';
}


function menu() {
  if(!isMenuOpened){
    document.getElementById("myMenu").style.width = "100%";
    document.getElementById("menu").src = xType;
    let style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: none;}`
    document.head.appendChild(style);
    isMenuOpened = true;
  }else{
    document.getElementById("myMenu").style.width = "0%";
    document.getElementById("menu").src = menuType;
    let style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: inline;}`;
    document.head.appendChild(style);
    isMenuOpened = false;
    }
}
