// Timer functionality
const startDate = new Date('2022-04-10T00:00:00');
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    timerElement.innerHTML = `${years} years, ${months} months, ${days} days<br>${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Quiz functionality
let currentQuestion = 0;
const answers = {
    1: 4,
    2: 'New York'
};

function checkPasscode() {
    const passcode = document.getElementById('passcode').value;
    if (passcode === '0410') {
        document.getElementById('passcode-screen').classList.remove('active');
        document.getElementById('quiz-screen').classList.add('active');
    } else {
        alert('Incorrect code. Try again!');
    }
}

function showCongratsMessage() {
    const question1 = document.getElementById('question1');
    question1.innerHTML = `
        <h2>🎉 wow good job! 🎉</h2>
        <p>next question...</p>
        <button onclick="showNextQuestion()" class="next-button">Next Question</button>
    `;
}

function showNextQuestion() {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'block';
}

function checkAnswer(questionNumber, answer) {
    if (answer === answers[questionNumber]) {
        if (questionNumber === 1) {
            showCongratsMessage();
        } else if (questionNumber === 2 && document.getElementById('question2').style.display !== 'none') {
            document.getElementById('quiz-screen').classList.remove('active');
            document.getElementById('prize-screen').classList.add('active');
        }
    } else {
        alert('That\'s not quite right. Try again!');
    }
}

// Add enter key functionality for passcode
document.getElementById('passcode').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPasscode();
    }
}); 
