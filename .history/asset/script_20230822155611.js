var btnBars = document.querySelector('.bars');
var showMenu = document.querySelector('.menu-list');
var btnOut = document.querySelector('.menu-list li:last-child');
btnBars.addEventListener('click',function () {
    showMenu.classList.toggle('show-menu-list');
});
btnOut.addEventListener('click',function (){
    showMenu.classList.remove('show-menu-list');
});
