// Get all question elements
const questions = document.querySelectorAll('.question');

// Add click event listener to each question
questions.forEach(question => {
    // Get answer element
    const answer = question.nextElementSibling;

    // Add click event listener to arrow icon
    const arrow = question.querySelector('.arrow-icon');
    arrow.addEventListener('click', () => {
        // Toggle class to show/hide answer element
        answer.classList.toggle('show');

        // Toggle arrow icon rotation
        arrow.classList.toggle('rotate');
    });
});