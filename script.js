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