var readlineSync = require('readline-sync');

var score = 0;


var highScores = [
  {
    name : "Pankaj",
    score : 3,
  },
  {
    name: "Sonu",
    score : 2,
  }
];

// Upto Exercise 6
var userName = readlineSync.question("What is your name?");

console.log("Welcome "+userName);

var userAge = readlineSync.question("Is your age > 25?");


if(userAge == "yes"){
  console.log("right");
  score++;
  console.log("Your score is "+score);
}else{
  console.log("wrong");
  score--;
  console.log("Your score is "+score);
}

var userCity = readlineSync.question("Is your city Deoghar?");

if(userCity == "yes"){
  console.log("right");
  score++;
  console.log("Your score is "+score);
}else{
  console.log("wrong");
  score--;
  console.log("Your score is "+score);
}


// Exercise 7
function add(numberOne, numberTwo){
  var sum = numberOne + numberTwo;
  return sum;
}

var result = add(5,10);
console.log(result);

//Exercise 8
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer===answer){
    console.log("right");
    score++;
    console.log("Your score is "+score);
  }else{
    console.log("wrong");
    score--;
    console.log("Your score is "+score);
  }
}

play("What is my name?","Roshan");
play("What is my age?","21");
play("What is my town?","Deoghar");


//Exercise 9
for(var i=0; i<5; i++){
  console.log("Roshan");
}

//star pattern
for(var i=0; i<=5; i++){
  var str="";
  for(var j=0; j<i; j++){
    str+="*";
  }
  console.log(str);
}

//Exercise 10
var groceryList = ["apple","orange","tomato","chocolate","chips"];
console.log(groceryList[0]);
console.log(groceryList[2]);
console.log(groceryList[groceryList.length-1]);

//Exercise 10
for(var i=0; i<groceryList.length; i++){
  console.log(groceryList[i]);
}

//Exercise 11
superman = {
  name: "superman",
  ability: "flight",
  costumeColor: "blue",
  strength: 1000,
}

batman = {
  name: "batman",
  ability: "hide",
  costumeColor: "black",
  strength: 500,
}

console.log(superman.name, batman.name);

//Exercise 12 to 15
var questions = [
  questionOne = {
  question: "What's my aim?",
  answer: "Happiness"
},
questionTwo = {
  question: "What's my experience?",
  answer: "zero"
},
]

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("right");
    score++;
  }else{
    console.log("wrong");
    score--;
  }
  console.log("Your current score is "+score);
  console.log("===================");
}

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Your final score is "+score);

console.log("High Scores: ");
for(var i=0; i<highScores.length; i++){
  var current = highScores[i];
  console.log(current.name,current.score);
}