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
    if(choices.indexOf(humanChoice)===-1)
    {
        alert("Wrong choice!")
    }
    else
    return humanChoice  
    

}
console.log(getComputerChoice())
console.log(getHumanChoice())