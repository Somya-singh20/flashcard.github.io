// Array storing questions and answers
let flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 5 + 3?", answer: "8" },
    { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" }
];

let currentCard = 0;
let flipped = false;

// Get HTML elements
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const flashcardEl = document.getElementById('flashcard');
const cardCounterEl = document.getElementById('card-counter');

// Load Initial Card
function loadCard() {
    questionEl.innerText = flashcards[currentCard].question;
    answerEl.innerText = flashcards[currentCard].answer;
    updateCardCounter();
}

// Flip the card
function flipCard() {
    flashcardEl.classList.toggle('flip');
    flipped = !flipped;
}

// Show next card
function nextCard() {
    if (currentCard < flashcards.length - 1) {
        currentCard++;
    } else {
        alert("You've reached the last card!");
    }
    resetCard();
}

// Show previous card
function prevCard() {
    if (currentCard > 0) {
        currentCard--;
    } else {
        alert("You're at the first card!");
    }
    resetCard();
}

// Reset card to question view
function resetCard() {
    if (flipped) {
        flipCard();
    }
    loadCard();
}

// Update card counter
function updateCardCounter() {
    cardCounterEl.innerText = `Card ${currentCard + 1} of ${flashcards.length}`;
}

// Handle Adding New Flashcard
document.getElementById('flashcard-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const newQuestion = document.getElementById('newQuestion').value;
    const newAnswer = document.getElementById('newAnswer').value;

    if (newQuestion.trim() !== "" && newAnswer.trim() !== "") {
        // Add new flashcard to the array
        flashcards.push({ question: newQuestion, answer: newAnswer });
        alert("New flashcard added successfully! 🎉");

        // Reset form
        document.getElementById('flashcard-form').reset();
        updateCardCounter();
    } else {
        alert("Please enter both a question and an answer.");
    }
});

// Load initial card on page load
loadCard();
