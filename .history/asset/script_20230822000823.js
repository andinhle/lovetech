var btnBars = document.querySelector('.bars');
var showMenu = document.querySelector('.menu-list');
btnBars.addEventListener('click',function () {
    showMenu.classList.toggle('show-menu-list');
});
btnOut.addEventListener('click',function (){
    showMenu.classList.remove('show-menu-list');
});

function copyCode() {
var codeElement = document.getElementById("code");
var codeText = codeElement.textContent;
navigator.clipboard.writeText(codeText)
    .then(function() {
    alert("Đã sao chép mã!");
    var copyButton = document.querySelector('.copy-code');
    copyButton.innerHTML = ' Sao chép thành công <i class="fa-solid fa-check"></i>';
    setTimeout(() => {
        copyButton.innerHTML = 'Sao chép <i class="fa-regular fa-clipboard"></i>';
    }, 2000);
    })
    .catch(function(error) {
    console.error("Sao chép không thành công:", error);
    });
    
}