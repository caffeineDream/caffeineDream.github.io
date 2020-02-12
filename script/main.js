var open = false;
const menu = document.getElementById('nav-sandwich');
const navList = document.getElementById('nav-list');

menu.addEventListener('click', () => {
    if (!open) {
        menu.classList.add('open');
        navList.classList.add('open');
        open = true;
    } else {
        menu.classList.remove('open');
        navList.classList.remove('open');
        open = false;
    }
});


var shownContent = 'brusovContent';
var tabButtons = document.getElementsByClassName('tab-button');
var swapContent = function () {
    document.getElementById(shownContent).classList.add('display-none');
    document.getElementById(this.value).classList.remove('display-none');
    document.querySelector('button:disabled').classList.remove('button-active');
    document.querySelector('button:disabled').removeAttribute('disabled');
    this.classList.add('button-active');
    this.setAttribute('disabled', 'disabled');
    shownContent = this.value;
};

for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', swapContent, false);
}