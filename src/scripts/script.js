// This file contains the JavaScript code for the webpage. 
// You can add functions to handle user interactions, manipulate the DOM, and implement dynamic behavior.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Webpage is fully loaded and ready to go!');
    
    // Example function to handle a button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }
});