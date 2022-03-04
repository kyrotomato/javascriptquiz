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
    choice.setAttribute("id", "answerA");
    //2
    var choice2 = document.createElement("button");
    choicesContainerEl.appendChild(choice2);
    choice2.innerText = questions[qCount].options[1];
    choice2.setAttribute("id", "answerB");
    //3
    var choice3 = document.createElement("button");
    choicesContainerEl.appendChild(choice3);
    choice3.innerText = questions[qCount].options[2];
    choice3.setAttribute("id", "answerC");
    //4
    var choice4 = document.createElement("button");
    choicesContainerEl.appendChild(choice4);
    choice4.innerText = questions[qCount].options[3];
    choice4.setAttribute("id", "answerD");
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
    choice.addEventListener("click", lockAnswer1);
    choice2.addEventListener("click", lockAnswer2);
    choice3.addEventListener("click", lockAnswer3);
    choice4.addEventListener("click", lockAnswer4);
    
};



function nextQ() {
    //increase the q count so the question increase
    qCount = qCount + 1;
    //target the created div id
    document.getElementById(questioncontainer);
    //set the text of the container to the next question
    questioncontainer.innerText = questions[qCount].question;

    //target the choice elements
        //1
        document.getElementById(answerA);
        //innertext
        answerA.innerText = questions[qCount].options[0];
        //2
        document.getElementById(answerB);
        //innertext
        answerB.innerText = questions[qCount].options[1];
        //3
        document.getElementById(answerC);
        //innertext
        answerC.innerText = questions[qCount].options[2];
        //4
        document.getElementById(answerD);
        //innertext
        answerD.innerText = questions[qCount].options[3];

};
function prevQ() {
    //increase the q count so the question increase
    qCount = qCount - 1;
    //target the created div id
    document.getElementById(questioncontainer);
    //set the text of the container to the next question
    questioncontainer.innerText = questions[qCount].question;

    //target the choice elements
        //1
        document.getElementById(answerA);
        //innertext
        answerA.innerText = questions[qCount].options[0];
        //2
        document.getElementById(answerB);
        //innertext
        answerB.innerText = questions[qCount].options[1];
        //3
        document.getElementById(answerC);
        //innertext
        answerC.innerText = questions[qCount].options[2];
        //4
        document.getElementById(answerD);
        //innertext
        answerD.innerText = questions[qCount].options[3];

};



// choice = document.getElementById("answerA");
// choice2 = document.getElementById("answerB");
// choice3 = document.getElementById("answerC");
// choice4 = document.getElementById("answerD");

// choice.addEventListener("click", lockAnswer);
// choice2.addEventListener("click", lockAnswer);
// choice3.addEventListener("click", lockAnswer);
// choice4.addEventListener("click", lockAnswer);

function lockAnswer1(){
    answerChoice=1;
};
function lockAnswer2(){
    answerChoice=2;
};
function lockAnswer3(){
    answerChoice=3;
};
function lockAnswer4(){
    answerChoice=4;
};   
//add submit button
//make submit button check correctanswer, against answer choice. 