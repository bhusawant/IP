// Arrow Function used for Event Handling
document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    const myParagraph = document.getElementById('myParagraph');

    // Arrow Function for Click Event Handling
    myButton.addEventListener('click', () => {
        // Arrow Function for DOM Manipulation
        myParagraph.textContent = "Text changed!";

        // Arrow Function for CSS Manipulation
        myParagraph.style.color = "red";
    });
});
