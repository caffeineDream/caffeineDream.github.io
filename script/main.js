// Navbar menu
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
// Tab and page buttons
var shownContent = 'brusovContent';
var shownCardBrusov = 'zalCardBrusov';
var shownCardBrusov2 = 'mirrorCardBrusov2';
var shownCardPovar = 'zalCardPovar';
var tabButtons = document.getElementsByClassName('tab-button');
var galleryButtonsBrusov = document.getElementsByClassName('gallery-button-brusov');
var galleryButtonsBrusov2 = document.getElementsByClassName('gallery-button-brusov2');
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
var swapCards = function(galleryMarker, subjectButton) {
    document.getElementById(galleryMarker).classList.remove('display-flex');
    document.getElementById(galleryMarker).classList.add('display-none');
    document.querySelector('[value=' + CSS.escape(galleryMarker) + ']').removeAttribute('disabled');
    document.querySelector('[value=' + CSS.escape(subjectButton.value) + ']').setAttribute('disabled', 'disabled');
    document.querySelector('[value=' + CSS.escape(galleryMarker) + ']').classList.remove('current-button');
    document.querySelector('[value=' + CSS.escape(subjectButton.value) + ']').classList.add('current-button')
    document.getElementById(subjectButton.value).classList.remove('display-none');
    document.getElementById(subjectButton.value).classList.add('display-flex');
    if (subjectButton.classList.contains('gallery-button-brusov')) {
        shownCardBrusov = subjectButton.value;
    } else if (subjectButton.classList.contains('gallery-button-povar')) {
        shownCardPovar = subjectButton.value;
    } else {
        shownCardBrusov2 = subjectButton.value;
    }
};
for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', swapContent, false);
};
for (var i = 0; i < galleryButtonsBrusov.length; i++) {
    galleryButtonsBrusov[i].addEventListener('click', function() {
        swapCards(shownCardBrusov, this);
    }, false);
};
for (var i = 0; i < galleryButtonsBrusov2.length; i++) {
    galleryButtonsBrusov2[i].addEventListener('click', function() {
        swapCards(shownCardBrusov2, this);
    }, false);
};
for (var i = 0; i < galleryButtonsPovar.length; i++) {
    galleryButtonsPovar[i].addEventListener('click', function() {
        swapCards(shownCardPovar, this);
    }, false);
};
// Arrow buttons for mobile
var brusovCards = document.querySelectorAll('#brusovContent .gallery-card');
var brusov2Cards = document.querySelectorAll('#brusov2Content .gallery-card');
var povarCards = document.querySelectorAll('#povarContent .gallery-card');
var arrowButtons = document.getElementsByClassName('arrow-button');
var brusovIndex = 0;
var brusov2Index = 0;
var povarIndex = 0;
function arrowClick(currentCardsArray, index, direction ) {
    var maxIndex;
    var currentGallery = currentCardsArray[index].parentElement.id
    if (currentGallery == 'brusovContent') {
        maxIndex = brusovCards.length - 1;
    } else if (currentGallery == 'povarContent') {
        maxIndex = povarCards.length - 1;
    } else {
        maxIndex = brusov2Cards.length - 1;
    };

    if (direction == 'right' && index < maxIndex) {
        currentCardsArray[index].classList.remove('display-flex');
        currentCardsArray[index].classList.add('display-none');
        currentCardsArray[index+1].classList.remove('display-none');
        currentCardsArray[index+1].classList.add('display-flex');
        if (currentGallery == 'brusovContent') {
            brusovIndex++;
        } else if (currentGallery == 'povarContent') {
            povarIndex++;
        } else {
            brusov2Index++;
        };
    } else if (direction == 'left' && index !== 0) {
        currentCardsArray[index].classList.remove('display-flex');
        currentCardsArray[index].classList.add('display-none');
        currentCardsArray[index-1].classList.remove('display-none');
        currentCardsArray[index-1].classList.add('display-flex');
        if (currentGallery == 'brusovContent') {
            brusovIndex--;
        } else if (currentGallery == 'povarContent') {
            povarIndex--;
        } else {
            brusov2Index--;
        };
    };
};
for (var i = 0; i < arrowButtons.length; i++) {
    arrowButtons[i].addEventListener('click', function() {
        if (this.classList.contains('arrow-brusov') && this.classList.contains('arrow-left')) {
            arrowClick(brusovCards, brusovIndex, 'left');
        } else if (this.classList.contains('arrow-brusov') && this.classList.contains('arrow-right')) {
            arrowClick(brusovCards, brusovIndex, 'right');
        } else if (this.classList.contains('arrow-povar') && this.classList.contains('arrow-left')) {
            arrowClick(povarCards, povarIndex, 'left');
        } else if (this.classList.contains('arrow-povar') && this.classList.contains('arrow-right')) {
            arrowClick(povarCards, povarIndex, 'right');
        } else if (this.classList.contains('arrow-brusov2') && this.classList.contains('arrow-left')) {
            arrowClick(brusov2Cards, brusov2Index, 'left');
        } else if (this.classList.contains('arrow-brusov2') && this.classList.contains('arrow-right')) {
            arrowClick(brusov2Cards, brusov2Index, 'right');
        }
    }, false);
};
//YCLIENTS
if(screen.width > 768){
    var d = document,
                h = d.getElementsByTagName('head')[0],
                s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://w163948.yclients.com/widgetJS';
        h.appendChild(s);
};