const tabButtons = document.querySelectorAll('button.tab-button');
const tableWrappers = document.querySelectorAll('table.table-prices');
/* 
 * Price tables pagination
 */
const onTableBtnClick = (e) => {
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
    [...tableWrappers].forEach((wrapper) => {
        wrapper.classList.add('display-none');
    });
    const currentTable = document.querySelector('table#' + currentButtonId);
    currentTable.classList.remove('display-none');
};