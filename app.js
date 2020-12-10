/*--------------------------------------------------------------------------------*/
/*-----------------------QUIZ Console App-----------------------------------------*/

var readLineSync = require('readline-sync');
var questions=[
    {
        question: "Inside which HTML element do we put the JavaScript?" ,
        answers: [
            {text:'<js>', correct:false},
            {text:'<javascript>', correct:false},
            {text:'<scripting>', correct:false},
            {text:'<script>', correct:true}
        ]
    },
    {
        question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?" ,
        answers: [
            {text:'alertbox("GeeksforGeeks");', correct:false},
            {text:'msg("GeeksforGeeks");', correct:false},
            {text:'msgbox("GeeksforGeeks");', correct:false},
            {text:'alert("GeeksforGeeks");', correct:true}
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called “geek.js”?" ,
        answers: [
            {text:'<script src="geek.js">', correct:true},
            {text:'<script href="geek.js">', correct:false},
            {text:'<script ref="geek.js">', correct:false},
            {text:'<script name="geek.js">', correct:false}
        ]
    },
];

var userList =[
    {
        userName:"gopal",
        score:97
    },
    {
        userName:"sourav",
        score:196
    }
];

var score=0;
function quiz(questions){
    var i=0;
    while(i<questions.length){      
    console.log(questions[i].question);
    questions[i].answers.forEach((answer,index) => {
        console.log((index+1)+')'+answer.text);  
    })
    var answerGivenByUser = readLineSync.question('Type the correct option: ');
    questions[i].answers.forEach( (answer,index) => {  
        if((index+1)==answerGivenByUser && answer.correct==true){
        score++;
        }
    })
    i++;
    }
    return score;
}

function game(userList){
    var score;
    var userName = readLineSync.question("Type your username: ")
    if(userName=='') return;
    score = quiz(questions);
    for(var i=0;i<userList.length;i++){
        if(userName==userList[i].userName){
            userList[i].score = score;
            return;
        }
    }
    userList.push({userName: userName, score:score}); 
    console.log("Username(You)".padEnd(20)+"|"+"Score".padEnd(10));
    console.log("-".repeat(31));
    console.log(userName.padEnd(20)+'|'+score); 
    console.log("-".repeat(31));
}

function listOfPlayer(userList){
    console.log("Username(All)".padEnd(20)+"|"+"Score".padEnd(10));
    console.log("-".repeat(31));
    userList.forEach(user => {
        console.log(user.userName.padEnd(20)+"|"+user.score);
    })
    console.log("-".repeat(31));
}


function highestScorer(userList){
    var max=0;
    var username='';
    console.log("Username(Highest)".padEnd(20)+"|"+"Score".padEnd(10));
    console.log("-".repeat(31));
    userList.forEach(user=>{
        if(user.score>max){
            max=user.score;
            username=user.userName;
        }
    })
    console.log(username.padEnd(20)+"|"+max);
    console.log("-".repeat(31));
}

game(userList);
listOfPlayer(userList);
highestScorer(userList);