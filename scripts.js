//questions pool
var questions = [{
    question: "A type of element that clearly describes its meaning to both the browser and the developer",
    options: ["semantic", "details", "section", "summary"],
    correctAnswer: 3
}, {
    question: "Javascript library that greatly simplifies JavaScript programming",
    options: ["Java", "Jquery", "JSON", "Bootstrap"],
    correctAnswer: 3
}, {
    question: "#div-example' is an example of what type of selector",
    options: ["element", "id", "class", "specific"],
    correctAnswer: 3
}, {
    question: "Who created javascript?",
    options: ["Erlich Bachman", "Brendan Eich", "Elon Musk", "James Gosling"],
    correctAnswer: 3
}, {
    question: "The external javascript file must contain the <script> tag",
    options: ["True", "False"],
    correctAnswer: 2
}, {
    question: "JavaScript is the same as Java,",
    options: ["True", "False"],
    correctAnswer: 2
}, {
    question: "how do you declare a JavaScript variable with the name example?",
    options: ["Var example;", "var-example;", "var = example;", "var = ('example')"],
    correctAnswer: 3
}, {
    question: "Is Javascript case sensitive",
    options: ["Yes", "No"],
    correctAnswer: 3
}, {
    question: "Which operator is used to assign a value to a variable?",
    options: ["'X'", "'='", "'-'", "no operator is used"],
    correctAnswer: 3
}, {
    question: "How do you find the number with the highest value of x and y",
    options: ["Math.ceil(x, y)", "Ceil(x, y)", "Math.max(x, y)", "Math.High(x, y)"],
    correctAnswer: 3
}];
//create container for questions

//variables to store the question count, amount correct, and whether the quiz is done
var qCount = 0;
var correct = 0;
var quizFinish = false;
var answerChoice = 0;
//select the div with id quiz
quiz = document.querySelector("#quiz");

button = document.getElementById("start");
button.addEventListener("click", startQuiz);
function startQuiz() {
    //create container to hold everything
    var quizContainerEl = document.createElement("div");
    //append quizContainerEl to the quiz div
    quiz.appendChild(quizContainerEl);
    
    //create div for the question
    var questionContainerEl = document.createElement("div");
    //give the div an id
    questionContainerEl.setAttribute("id", "questioncontainer");
    quizContainerEl.appendChild(questionContainerEl);
    //change container text to question from array
    questionContainerEl.innerText = questions[qCount].question;
    //create el for the choices
    var choicesContainerEl = document.createElement("ul");
    quizContainerEl.appendChild(choicesContainerEl);
    //four spaces for answers
    //1
    var choice = document.createElement("button");
    choicesContainerEl.appendChild(choice);
    choice.innerText = questions[qCount].options[0];
    choice.setAttribute("id", "answer-1");
    //2
    var choice2 = document.createElement("button");
    choicesContainerEl.appendChild(choice2);
    choice2.innerText = questions[qCount].options[1];
    choice2.setAttribute("id", "answer-2");
    //3
    var choice3 = document.createElement("button");
    choicesContainerEl.appendChild(choice3);
    choice3.innerText = questions[qCount].options[2];
    choice3.setAttribute("id", "answer-3");
    //4
    var choice4 = document.createElement("button");
    choicesContainerEl.appendChild(choice4);
    choice4.innerText = questions[qCount].options[3];
    choice4.setAttribute("id", "answer-4");
    //button container
    var buttonBox = document.createElement("div");
    quizContainerEl.appendChild(buttonBox);
    //create previous button
    var buttonPrev = document.createElement("button");
    buttonPrev.innerHTML = "Previous";
    buttonBox.appendChild(buttonPrev);
    //create next button
    var buttonNext = document.createElement("button");
    buttonNext.innerHTML = "Next";
    buttonBox.appendChild(buttonNext);
    //remove start button
    start.remove();
    buttonNext.addEventListener("click", nextQ);
    buttonPrev.addEventListener("click", prevQ);
    choice.addEventListener("click", checkAnswer);
    choice2.addEventListener("click", checkAnswer);
    choice3.addEventListener("click", checkAnswer);
    choice4.addEventListener("click", checkAnswer);
    
};



function nextQ() {
    //increase the q count so the question increase
    qCount = qCount + 1;
    setQuestion();

};
function prevQ() {
    //increase the q count so the question increase
    qCount = qCount - 1;
    setQuestion();

};
function setQuestion(){
    document.getElementById(questioncontainer);
    //set the text of the container to the next question
    questioncontainer.innerText = questions[qCount].question;

    //target the choice elements
        //1
        var answerA = document.getElementById("answer-1");
        //innertext
        answerA.innerText = questions[qCount].options[0];
        answerA.classList.remove('correct');
        //2
        var answerB = document.getElementById("answer-2");
        //innertext
        answerB.innerText = questions[qCount].options[1];
        answerB.classList.remove('correct');
        //3
        var answerC = document.getElementById("answer-3");
        //innertext
        answerC.innerText = questions[qCount].options[2];
        answerC.classList.remove('correct');
        //4
        var answerD = document.getElementById("answer-4");
        //innertext
        answerD.innerText = questions[qCount].options[3];
        answerD.classList.remove('correct');
}

function checkAnswer(event){
    var id=event.target.id;
    var userAnswer=id.split('-')[1];
    if (userAnswer==questions[qCount].correctAnswer){
        correct++
        event.target.classList.add("correct");
    };
};
//add submit button
//make submit button check correctanswer, against answer choice.

//record number of correct

//timer
