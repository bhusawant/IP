// Access the form and the element to display text
const myForm = document.getElementById('myForm');
const displayText = document.getElementById('displayText');

// Event listener for form submission
myForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input value
    const userInput = document.getElementById('textInput').value;

    // Display the input value
    displayText.textContent = `You entered: ${userInput}`;

    // Clear the form field after submission
    document.getElementById('textInput').value = '';
});
