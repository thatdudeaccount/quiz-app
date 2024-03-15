const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionsIndex;
let quizScore = 0;


startButton.addEventListener('click', startGame)

nextButton.addEventListener('click',() => {
    currentQuestionsIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random()-0.5)
    currentQuestionsIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    quizScore=0;
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=> {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length>currentQuestionsIndex+1){
        nextbtn.classList.remove("hide")
    } else {
        startbtn.innerText = 'restart'
        startbtn.classList.remove("hide")
    }
    if(selectedButton.dataset=correct){
    quizScore++
    }
    document.getElementById('right-answers').innerText=quizScore
}

function setStatusClass (element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'which one of these is a JavaScript framework?',
        answers: [
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false},
        ],
    },

    {
        question: 'Who is the prime minister of India?',
        answers: [
            {text: 'Narendra Modi', correct: true},
            {text: 'Rajiv Gandhi', correct: false},
            {text: 'Mamta Banerji', correct: true},
            {text: 'Dont know', correct: false},
        ],
    },
]