const tabButtons = document.querySelectorAll('button.tab-button');
const galleryWrappers = document.querySelectorAll('div.gallery-wrapper');
/* 
 * Galleries pagination
 */
const onTabBtnClick = (e) => {
    const currentButton = e.currentTarget;
    const currentButtonId = currentButton.id;
    // Change tab buttons appearances accordingly
    [...tabButtons].forEach((button) => {
        button.classList.remove('current-button');
        button.disabled = false;
    });
    currentButton.classList.add('current-button');
    currentButton.disabled = true;
    // Switch content accordinlgy
    [...galleryWrappers].forEach((wrapper) => {
        wrapper.classList.add('display-none');
    });
    const currentGallery = document.querySelector('div#' + currentButtonId);
    currentGallery.classList.remove('display-none');
};
/*
 * In-gallery pagination
 */
const onGalleryBtnClick = (e) => {
    const currentButton = e.currentTarget;
    const currentContentWrapper = currentButton.parentNode.parentNode;
    const groupButtons = currentContentWrapper.querySelectorAll('div.button-holder > button');
    // Change tab buttons appearances accordingly
    [...groupButtons].forEach((button) => {
        button.classList.remove('current-button');
        button.disabled = false;
    });
    currentButton.classList.add('current-button');
    currentButton.disabled = true;
    // Switch content accordinlgy
      // Hide shown card
    const shownContent = currentContentWrapper.querySelector('div.gallery-card.display-flex');
    shownContent.classList.remove('display-flex');
    shownContent.classList.add('display-none');
     // Show new card by button text
    const currentButtonText = currentButton.innerText;
      // If button text contains spaces, swap then to hypen to use as id
    const currentCardId = currentButtonText.includes(' ') ? currentButtonText.replace(' ', '-')  : currentButtonText;
    const currentCard = currentContentWrapper.querySelector('div#q' + currentCardId);
    currentCard.classList.remove('display-none');
    currentCard.classList.add('display-flex');
};
/*
 * Mobile arrows
 */
const onMobileRightArrow = (e) => {
    const shownCard = e.currentTarget.parentNode.querySelector('div[class="gallery-card display-flex"][id]');
    const nextCard = shownCard.nextElementSibling;
    if (nextCard && nextCard.matches('div[class="gallery-card display-none"][id]')) {
        shownCard.classList.remove('display-flex');
        shownCard.classList.add('display-none');
        nextCard.classList.remove('display-none');
        nextCard.classList.add('display-flex');
    }
}
const onMobileLeftArrow = (e) => {
    const shownCard = e.currentTarget.parentNode.querySelector('div[class="gallery-card display-flex"][id]');
    const previousCard = shownCard.previousElementSibling;
    if (previousCard && previousCard.matches('div[class="gallery-card display-none"][id]')) {
        shownCard.classList.remove('display-flex');
        shownCard.classList.add('display-none');
        previousCard.classList.remove('display-none');
        previousCard.classList.add('display-flex');
    }
}