id="cwzmtj"
const questions = [

    {
        question: "How many eggs are usually used in a standard cake?",
        answers: ["1", "2", "3", "5"],
        correct: "3"
    },

    {
        question: "Which ingredient helps bread rise?",
        answers: ["Butter", "Yeast", "Salt", "Sugar"],
        correct: "Yeast"
    },

    {
        question: "What ingredient makes pancakes fluffy?",
        answers: [
            "Pepper",
            "Oil",
            "Baking Powder",
            "Water"
        ],
        correct: "Baking Powder"
    },

    {
        question: "What temperature does water boil at?",
        answers: ["80°C", "100°C", "120°C", "150°C"],
        correct: "100°C"
    },

    {
        question: "Which ingredient is commonly used in pasta?",
        answers: ["Chocolate", "Rice", "Flour", "Honey"],
        correct: "Flour"
    },

    {
        question: "What ingredient is used to make cookies sweet?",
        answers: ["Salt", "Sugar", "Pepper", "Garlic"],
        correct: "Sugar"
    },

    {
        question: "Which ingredient is needed for scrambled eggs?",
        answers: ["Eggs", "Chocolate", "Rice", "Beans"],
        correct: "Eggs"
    }

];

let currentQuestion = 0;

let score = 0;

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const scoreElement =
    document.getElementById("score");


function loadQuestion() {

    const q = questions[currentQuestion];

    questionElement.innerText = q.question;

    answersElement.innerHTML = "";

    q.answers.forEach(answer => {

        const button =
            document.createElement("button");

        button.innerText = answer;

        button.classList.add("answer-btn");

        button.onclick = () => checkAnswer(answer);

        answersElement.appendChild(button);
    });
}


function checkAnswer(answer) {

    const correct =
        questions[currentQuestion].correct;

    if (answer === correct) {

        score++;

        alert("Correct!! 🍓");

    } else {

        alert("Wrong answer 😭");
    }

    scoreElement.innerText = score;

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        questionElement.innerText =
            `Game Over! Final Score: ${score}/${questions.length}`;

        answersElement.innerHTML = "";

        return;
    }

    loadQuestion();
}


loadQuestion();




