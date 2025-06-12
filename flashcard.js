const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
    { question: "What is the square root of 64?", answer: "8" },
    { question: "Which language is primarily used for web development?", answer: "JavaScript" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" }
];

let currentIndex = 0;
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const showAnswerBtn = document.getElementById('show-answer');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function displayCard(index) {
    questionEl.textContent = flashcards[index].question;
    answerEl.textContent = flashcards[index].answer;
    answerEl.classList.add('hidden');
}

showAnswerBtn.addEventListener('click', () => {
    answerEl.classList.toggle('hidden');
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayCard(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        displayCard(currentIndex);
    }
});

displayCard(currentIndex);
