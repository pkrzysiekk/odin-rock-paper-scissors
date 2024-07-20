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
function getHumanChoice()
{   const choices=['rock','paper','scissors']
    humanChoice=prompt("Hello! You are about to play rock paper scissors against the computer,what's your choice?")
    humanChoice=humanChoice.toLowerCase()
    if(choices.indexOf(humanChoice)===-1)
    {
        alert("Wrong choice!")
    }
    else
    return humanChoice  
}
function playRound(humanChoice,computerChoice)
{
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
    

}
function playGame()
{
    for(i=0;i<5;i++)
    {
        humanChoice=getHumanChoice()
        computerChoice=getComputerChoice()
        playRound(humanChoice,computerChoice)
        alert(`Your score: ${humanScore} \n Computer score: ${computerScore}`)
    }
}
let humanScore=0
let computerScore=0
playGame()

