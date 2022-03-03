//questions pool
var questions = [{
    question: "A type of element that clearly describes its meaning to both the browser and the developer",
    options: ["semantic", "details;", "section;", "summary;"],
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
},{
	question: "JavaScript is the same as Java,",
    options: ["True", "False"],
    correctAnswer: 2
},{
	question: "how do you declare a JavaScript variable with the name example?",
    options: ["Var example;", "var-example;", "var = example;", "var = ('example')"],
    correctAnswer: 3
},{
	question: "Is Javascript case sensitive",
    options: ["Yes", "No"],
    correctAnswer: 3
},{
	question: "Which operator is used to assign a value to a variable?",
    options: ["'X'", "'='", "'-'", "no operator is used"],
    correctAnswer: 3
},{
	question: "How do you find the number with the highest value of x and y",
    options: ["Math.ceil(x, y)", "Ceil(x, y)", "Math.max(x, y)", "Math.High(x, y)"],
    correctAnswer: 3
}];
//create container for questions

//variables to store the question count, amount correct, and whether the quiz is done
var Qcount = 0;
var correct = 0;
var Qfinish = false;
//select the div with id quiz
quiz = document.querySelector("#quiz");

button = document.getElementById("start");
button.addEventListener("click", startQuiz);
function startQuiz(){
    //create container to hold everything
    var quizContainerEl = document.createElement("div");
    //append quizContainerEl to the quiz div
    quiz.appendChild(quizContainerEl);
    
    //create div for the question
    var questionContainerEl = document.createElement("div");
    quizContainerEl.appendChild(questionContainerEl);
    questionContainerEl.innerText = questions;
    //create el for the choices
    var choicesContainerEl = document.createElement("ul");
    questionContainerEl.appendChild(choicesContainerEl);
        //four spaces for answers
        //1
        var choice = document.createElement("ol");
        choicesContainerEl.appendChild(choice);
        //2
        var choice2 = document.createElement("ol");
        choicesContainerEl.appendChild(choice2);
        //3
        var choice3 = document.createElement("ol");
        choicesContainerEl.appendChild(choice3);
        //4
        var choice4 = document.createElement("ol");
        choicesContainerEl.appendChild(choice4);
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
        start.remove();
}
