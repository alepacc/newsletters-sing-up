/**
 * main.js
 * Entry point for Newsletter Sign-Up with Success Message project
 */

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialization code here
    console.log('Newsletter Sign-Up script loaded.');
});

const divSucces = document.querySelector('.card__success');
const form = document.querySelector('form');

form.onsubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    divSucces.style.display = "flex";
}
