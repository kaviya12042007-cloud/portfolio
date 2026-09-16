// Simple button message

console.log("Welcome to Kaviya's Portfolio!");

// Show a small message when Live Demo buttons are clicked

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(function(button) {

    button.addEventListener("click", function() {
        console.log("Opening project...");
    });

});