let userScore = 0;
let roboScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorepara = document.querySelector('#user-score');
const roboScorepara = document.querySelector('#robo-score');


const GenroboChoice = () => {
    //rock,scissors,paper
    const options = ["rock", "paper", "scissors"];
    //robochoice
    const rand = Math.floor(Math.random() * 3);
    return options[rand];

};

const showwinner = (userwin, userChoice, roboChoice) => {
    if(userwin){
    userScore++;
    userScorepara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${roboChoice}`;
        msg.style.backgroundColor = "green";
    }else{
    roboScore++;
    roboScorepara.innerText = roboScore;
        msg.innerText = `you lose! ${roboChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    } 
};




const drawgame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#081b31";
};


const playGame = (userChoice,showwinner) => {
    const roboChoice = GenroboChoice();

    if(userChoice === roboChoice){
        drawgame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = roboChoice === "paper" ? false:
            true;
        }else if(userChoice === "paper"){
            userwin = roboChoice === "scissors" ? false:
            true;
        }else  if(userChoice === "scissors"){
            userwin = roboChoice === "rock" ? false:
            true;
        }
        showwinner(userwin, userChoice, roboChoice);
    
    }
    

};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice,showwinner); 
    });
     
});

