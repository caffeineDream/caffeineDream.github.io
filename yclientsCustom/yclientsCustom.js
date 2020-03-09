//YCLIENTS
// document.addEventListener('DOMContentLoaded',   function() {
//     document.getElementById('yclients-button').classList.add('ms_booking');
//     var scriptService = document.createElement('script');
//     scriptService.src = "https://w163948.yclients.com/widgetJS";
//     scriptService.type = "text/javascript";
//     scriptService.charset = "UTF-8";
//     document.getElementById('yclients-button')  .appendChild(scriptService );
// });

document.addEventListener('DOMContentLoaded', function() {
    createBookingButton();
    addYclientsScript();
})

function createBookingButton() {
    if (screen.width > 768) {
        let navList = document.getElementById('nav-list');
        let yclientsButton = document.createElement('a');
        yclientsButton.classList.add('desktop-yclients', 'ms_booking');
        yclientsButton.textContent += 'Онлайн-запись';
        navList.appendChild(yclientsButton);
    } else {
        let targetContainer = document.getElementById('mobile-yclients-target');
        let yclientsButton = document.createElement('button');
        yclientsButton.classList.add('mobile-yclients', 'ms_booking');
        yclientsButton.textContent += 'Онлайн-запись';
        targetContainer.insertBefore(yclientsButton, targetContainer.firstChild);
    };
};
function addYclientsScript() {
    let yclientsScript = document.createElement('script');
    yclientsScript.src = 'https://w163948.yclients.com/widgetJS';
    yclientsScript.type = 'text/javascript';
    yclientsScript.charset = 'UTF-8';
    document.body.appendChild(yclientsScript);
}


