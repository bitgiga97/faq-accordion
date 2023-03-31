// get all question elements as nodeLists.

const questions = document.querySelectorAll('.question');
const answer = document.querySelectorAll('#answer');
const arrow = document.querySelectorAll('#arrow');

// transform nodeLists to Array.

const questionArray = Array.from(questions);
const answerArray = Array.from(answer);
const arrowArray = Array.from(arrow);

//hide the answers by default
for (let i = 0; i < answer.length; i++) {
    answer[i].style.display = 'none';
}
questionArray.forEach((question, index) => {
    question.addEventListener("click", () => {
        if (question.lastElementChild.style.display === 'none' &&
            question.firstElementChild.style.transform === "") {
            question.firstElementChild.style.fontWeight = '900';
            question.children[1].style.transform = "rotate(180deg)";
            question.lastElementChild.style.display = 'block';
        } else if (question.children[1].style.transform === "rotate(180deg)") {
            question.lastElementChild.style.display = 'none';
            question.firstElementChild.style.transform = "";
        }

    });

});
// console.log(arrowArray);



console.log(questionArray);