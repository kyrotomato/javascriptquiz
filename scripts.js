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

button = document.getElementById("start");
button.addEventListener(start, startQuiz);
function startQuiz(){
    //create container to hold everything
    var quizContainerEl = document.createElement("div");
    //create div for the question
    var questionContainerEl = document.createElement("div");
    questionContainerEl.appendChild(quizContainerEl);
    //create el for the choices
    var choicesContainerEl = document.createElement("ul");
    choicesContainerEl.appendChild(questionContainerEl);
        //four spaces for answers
        //1
        var choice = document.createElement("ol");
        choice.appendChild(choicesContainerEl);
        //2
        var choice2 = document.createElement("ol");
        choice2.appendChild(choicesContainerEl);
        //3
        var choice3 = document.createElement("ol");
        choice3.appendChild(choicesContainerEl);
        //4
        var choice4 = document.createElement("ol");
        choice4.appendChild(choicesContainerEl);
    //button container
    var buttonBox = document.createElement("div")
    buttonBox.appendChild(quizContainerEl)
        //create previous button
    var buttonPrev = document.createElement("button")
    buttonPrev.appendChild(buttonBox)
    //create next button
    var buttonNext = document.createElement("button")
    buttonNext.appendChild(buttonBox)
}