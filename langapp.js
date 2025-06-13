const flashcards = [
  { word: "Hello", translation: "Hola" },
  { word: "Thank you", translation: "Gracias" },
  { word: "Goodbye", translation: "Adiós" },
  { word: "Please", translation: "Por favor" },
  { word: "Yes", translation: "Sí" },
  { word: "No", translation: "No" }
];

const quizData = [
  {
    question: "What is the translation of 'Thank you'?",
    options: ["Gracias", "Adiós", "Hola"],
    correct: "Gracias"
  },
  {
    question: "How do you say 'Please'?",
    options: ["Por favor", "Gracias", "Sí"],
    correct: "Por favor"
  }
];

let currentFlashcard = 0;

function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

function nextFlashcard() {
  currentFlashcard = (currentFlashcard + 1) % flashcards.length;
  const card = flashcards[currentFlashcard];
  document.getElementById("word").textContent = card.word;
  document.getElementById("translation").textContent = card.translation;
}

function speakWord() {
  const utterance = new SpeechSynthesisUtterance(flashcards[currentFlashcard].word);
  speechSynthesis.speak(utterance);
}

function loadQuiz() {
  const quizBox = document.getElementById("quiz-box");
  const data = quizData[Math.floor(Math.random() * quizData.length)];
  document.getElementById("quiz-question").textContent = data.question;

  const optionsContainer = document.getElementById("quiz-options");
  optionsContainer.innerHTML = "";
  data.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => alert(option === data.correct ? "✅ Correct!" : "❌ Try again.");
    optionsContainer.appendChild(btn);
  });
}

window.onload = () => {
  nextFlashcard();
  loadQuiz();
};
