console.log("Hello World")

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice()
{
    const choices=['rock','paper','scissors']
    return choices[getRandomInt(3)]
}
console.log(getComputerChoice())