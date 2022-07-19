if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  document.getElementById("icon").src = "/img/icon_dark.png";

  closedMenuIcon = '/img/menu_dark.png';
  document.getElementById("menu").src = closedMenuIcon;
  openedMenuIcon = '/img/x_dark.png';
}