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

const brusovButton = document.getElementById('brusovPriceButton');
const povarButton = document.getElementById('povarPriceButton');
const brusovPriceTable = document.getElementById('brusovPriceTable');
const povarPriceTable = document.getElementById('povarPriceTable');


povarButton.addEventListener('click', () => {
    brusovButton.classList.remove('button-active');
    brusovButton.removeAttribute('disabled');
    brusovPriceTable.classList.add('display-none');
    povarButton.classList.add('button-active');
    povarButton.setAttribute("disabled", "disabled");
    povarPriceTable.classList.remove('display-none');
});
brusovButton.addEventListener('click', () => {
    povarButton.classList.remove('button-active');
    povarButton.removeAttribute('disabled');
    povarPriceTable.classList.add('display-none');
    brusovButton.classList.add('button-active');
    brusovButton.setAttribute("disabled", "disabled");
    brusovPriceTable.classList.remove('display-none');
});