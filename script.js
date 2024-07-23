console.log("Hello World")

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice()
{
    const ComputerChoices=['rock','paper','scissors']
    return ComputerChoices[getRandomInt(3)]
}

function playRound(humanChoice,computerChoice)
{
    roundCount++
    if(roundCount>5)
    {
        getWinner()
        return

    }
    if(humanChoice===computerChoice)
    {       
        alert("Draw!")
    }
    else if(humanChoice==='rock' && computerChoice==='paper')
    {
        alert("Computer wins!")
        computerScore++
    }
    else if(humanChoice==='rock' && computerChoice==='scissors')
    {
        alert("You win!")
        humanScore++
    }
    else if(humanChoice==='paper' && computerChoice==='scissors')
    {
        alert("Computer wins!")
        computerScore++
    }
    else if(humanChoice==='paper' && computerChoice==='rock')
    {
        alert("You win!")
        humanScore++
    }
    else if(humanChoice==='scissors' && computerChoice==='rock')
    {
        alert("Computer wins!")
        computerScore++
    }
    else if(humanChoice==='scissors' && computerChoice==='paper')
    {
        alert("You win!")
        humanScore++
    }
    updateResult()
    

}
function updateResult()
{
    resultText=`Your score: ${humanScore} \n Computer score: ${computerScore}`
    resultParagraph.textContent=resultText
    resultDiv.appendChild(resultParagraph)

}
function getWinner()
{
    let winnerText=''
    if (computerScore > humanScore)
        winnerText="Computer wins the game!"
    else if(computerScore < humanScore)
       winnerText="You win the game!"
    else
     winnerText="Draw,no winner!"
    resultWinner.textContent=winnerText
    resultParagraph.appendChild(resultWinner)
}

let humanScore=0
let computerScore=0
let roundCount=0

const rockButton=document.querySelector("#rock")
const paperButton=document.querySelector("#paper")
const scissorsButton=document.querySelector("#scissors")
const resultDiv=document.querySelector("#result")
const resultParagraph=document.createElement("p")
const resultWinner=document.createElement("p")

rockButton.addEventListener("click", function (){
    playRound("rock",getComputerChoice());
})
paperButton.addEventListener("click", function (){
    playRound("paper",getComputerChoice());
})
scissorsButton.addEventListener("click", function (){
    playRound("scissors",getComputerChoice());
})


