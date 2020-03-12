document.addEventListener('DOMContentLoaded', function() {
    if (screen.width > 768) {
        createBookingButton();
        addYclientsScript();
    }
})

function createBookingButton() {
        let navList = document.getElementById('nav-list');
        let yclientsButton = document.createElement('a');
        yclientsButton.classList.add('desktop-yclients', 'ms_booking');
        yclientsButton.textContent += 'Онлайн-запись';
        navList.appendChild(yclientsButton);
};
function addYclientsScript() {
    let yclientsScript = document.createElement('script');
    yclientsScript.src = 'https://w163948.yclients.com/widgetJS';
    yclientsScript.type = 'text/javascript';
    yclientsScript.charset = 'UTF-8';
    document.body.appendChild(yclientsScript);
}


