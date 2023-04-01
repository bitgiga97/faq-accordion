// get all question elements as nodeLists
const questions = document.querySelectorAll('.question');

// transform nodeLists to Array.
const questionArray = Array.from(questions);

// variable to keep track of which question is currently open
let openQuestion = null;

// hide the answers by default
for (let i = 0; i < questionArray.length; i++) {
    questionArray[i].lastElementChild.style.display = 'none';
}

// add click event listener to each question
for (let i = 0; i < questionArray.length; i++) {
    questionArray[i].addEventListener("click", () => {

        // get the answer, arrow, and question text elements for the clicked question
        const answer = questionArray[i].lastElementChild;
        const arrow = questionArray[i].children[1];
        const questionText = questionArray[i].firstElementChild;

        // if no question is currently open, open the clicked question
        if (openQuestion === null) {
            answer.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
            arrow.style.transition = "all 0.5s ease-in";
            questionText.style.fontWeight = '900';
            openQuestion = questionArray[i];
        }
        // if the clicked question is already open, close it
        else if (openQuestion === questionArray[i]) {
            answer.style.display = 'none';
            arrow.style.transform = '';
            questionText.style.fontWeight = '500';
            openQuestion = null;
        }
        // if a different question is currently open, close it and open the clicked question
        else {
            openQuestion.lastElementChild.style.display = 'none';
            openQuestion.children[1].style.transform = '';
            openQuestion.firstElementChild.style.fontWeight = '500';

            answer.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
            questionText.style.fontWeight = '900';
            openQuestion = questionArray[i];
        }
    });
}