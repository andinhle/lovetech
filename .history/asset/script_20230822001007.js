var btnBars = document.querySelector('.bars');
var showMenu = document.querySelector('.menu-list');

btnBars.addEventListener('click',function () {
    showMenu.classList.toggle('show-menu-list');
});
btnOut.addEventListener('click',function (){
    showMenu.classList.remove('show-menu-list');
});
