const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() -0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    quizScore = 0
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }

    if (selectedButton.dataset.correct = correct) {
        quizScore++
    }

    document.getElementById('right-answers').innerText = quizScore;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct === 'true') {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        answers: [
            { text: '<scripting>', correct: false },
            { text: '<js>', correct: false },
            { text: '<javaScript>', correct: false },
            { text: '<script>', correct: true },
        ],
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            { text: 'head', correct: false },
            { text: 'body', correct: false },
            { text: 'both', correct: true },
        ],
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyperlink and Text Markup Language', correct: false },
            { text: 'HyperText Markup Language', correct: true },
            { text: 'Home Tool Markup Language', correct: false },
        ],
    },
    {
        question: 'Who is making the Web standards?',
        answers: [
            { text: 'Google', correct: false },
            { text: 'Microsoft', correct: false },
            { text: 'The World Wide Web Consortium', correct: true },
            { text: 'Mozilla', correct: false },
        ],
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        answers: [
            { text: '<heading>', correct: false },
            { text: '<h6>', correct: false },
            { text: '<h1>', correct: true },
            { text: '<head>', correct: false}
        ],
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        answers: [
            { text: '<lb>', correct: false },
            { text: '<br>', correct: true },
            { text: '<break>', correct: false },
        ],
    },
    {
        question: 'Choose the correct HTML element to define emphasized text',
        answers: [
            { text: '<em>', correct: true },
            { text: '<i>', correct: false },
            { text: '<strong>', correct: false },
        ],
    },
    {
        question: 'Which character is used to indicate an end tag?',
        answers: [
            { text: '^', correct: false },
            { text: '/', correct: false },
            { text: '>', correct: true },
            { text: '*', correct: false },
        ],
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Creative Style Sheets', correct: false },
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Computer Style Sheets', correct: false },
            { text: 'Colorful Style Sheets', correct: false },
        ],
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        answers: [
            { text: '<css>', correct: false },
            { text: '<style>', correct: true },
            { text: '<script>', correct: false },
        ],
    },
];
