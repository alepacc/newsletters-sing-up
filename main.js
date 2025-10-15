/**
 * main.js
 * Entry point for Newsletter Sign-Up with Success Message project
 */

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialization code here
    console.log('Newsletter Sign-Up script loaded.');

});

const card = document.querySelector(".card");
const divSucces = document.querySelector('.card__success');
const form = document.querySelector('form');
const btnDismiss = document.querySelector('.cardsuccess_btn');

form.onsubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted');
    divSucces.style.display = "flex";
    card.style.display = "none";
}


 if (btnDismiss) {
    btnDismiss.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log('Dismiss pressed');
        if (divSucces) divSucces.style.display = 'none', card.style.display = "flex";
        
    });
} else {
    console.warn('Dismiss button not found: .cardsuccess_btn');
}


