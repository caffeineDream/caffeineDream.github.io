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

// Tab buttons
var shownContent = 'brusovContent';
var shownCardBrusov = 'zalCardBrusov';
var shownCardPovar = 'zalCardPovar';
var tabButtons = document.getElementsByClassName('tab-button');
var galleryButtonsBrusov = document.getElementsByClassName('gallery-button-brusov');
var galleryButtonsPovar = document.getElementsByClassName('gallery-button-povar');

var swapContent = function() {
    document.getElementById(shownContent).classList.add('display-none');
    document.getElementById(this.value).classList.remove('display-none');
    document.querySelector('button:disabled').classList.remove('button-active');
    document.querySelector('button:disabled').removeAttribute('disabled');
    this.classList.add('button-active');
    this.setAttribute('disabled', 'disabled');
    shownContent = this.value;
    if (this.value == 'povarContent') {
        shownCard = 'zalCardPovar';
    } else {
        shownCard = 'zalCardBrusov'
    };

};
var swapCardsBrusov = function() {
    document.getElementById(shownCardBrusov).classList.remove('display-flex');
    document.getElementById(shownCardBrusov).classList.add('display-none');
    document.querySelector('.gallery-button-brusov[value=' + CSS.escape(shownCardBrusov) + ']').removeAttribute('disabled');
    document.querySelector('.gallery-button-brusov[value=' + CSS.escape(this.value) + ']').setAttribute('disabled', 'disabled');
    document.getElementById(this.value).classList.remove('display-none');
    document.getElementById(this.value).classList.add('display-flex');
    shownCardBrusov = this.value;
};
var swapCardsPovar = function() {
    document.getElementById(shownCardPovar).classList.remove('display-flex');
    document.getElementById(shownCardPovar).classList.add('display-none');
    document.querySelector('.gallery-button-povar[value=' + CSS.escape(shownCardPovar) + ']').removeAttribute('disabled');
    document.querySelector('.gallery-button-povar[value=' + CSS.escape(this.value) + ']').setAttribute('disabled', 'disabled');
    document.getElementById(this.value).classList.remove('display-none');
    document.getElementById(this.value).classList.add('display-flex');
    shownCardPovar = this.value;
};

for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', swapContent, false);
};
for (var i = 0; i < galleryButtonsBrusov.length; i++) {
    galleryButtonsBrusov[i].addEventListener('click', swapCardsBrusov, false)
};
for (var i = 0; i < galleryButtonsPovar.length; i++) {
    galleryButtonsPovar[i].addEventListener('click', swapCardsPovar, false)
};