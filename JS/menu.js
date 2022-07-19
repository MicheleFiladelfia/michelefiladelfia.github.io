let isMenuOpened = false;
let openedMenuIcon = '/img/x.png';
let closedMenuIcon = '/img/menu.png';


function openCloseMenu() {
    if(!isMenuOpened){
      document.getElementById("myMenu").style.width = "100%";
      document.getElementById("menu").src = openedMenuIcon;
      let style = document.createElement("style");
      style.innerHTML = `body::-webkit-scrollbar {display: none;}`
      document.head.appendChild(style);
      isMenuOpened = true;
    }else{
      document.getElementById("myMenu").style.width = "0%";
      document.getElementById("menu").src = closedMenuIcon;
      let style = document.createElement("style");
      style.innerHTML = `body::-webkit-scrollbar {display: inline;}`;
      document.head.appendChild(style);
      isMenuOpened = false;
    }
}