//page generation function. inserts parameters and generates page with said parameters
function setStructure(parent, elementType, setId, setClass) {
    let element = document.createElement(elementType)
    if (setClass) {
        element.setAttribute('class', setClass)
    }
    if (setId) { 
        element.setAttribute('id', setId)
    }
    parent.appendChild(element)
}

//sets class on container
const container = document.getElementById('container')
container.setAttribute("class", "container text-center justify-content-center align-items-center vh-100 text-light")

//needs refactoring. runs the function above 17 times with parameters. can put into a loop 
setStructure(container, 'div', 'row1', "row justify-content-center align-items-stretch")
setStructure(row1, 'div', '0', "col-4 p-5 border border-5 border-start-0 border-top-0 border-light")
setStructure(row1, 'div', '1', "col-4 p-5 border border-5 border-top-0 border-light")
setStructure(row1, 'div', '2', "col-4 p-5 border border-5 border-end-0 border-top-0 border-light")

setStructure(container, 'div', 'row2', "row justify-content-center align-items-stretch")
setStructure(row2, 'div', '3', "col-4 p-5 border border-5 border-start-0 border-light")
setStructure(row2, 'div', '4', "col-4 p-5 border border-5 border-light")
setStructure(row2, 'div', '5', "col-4 p-5 border border-5 border-end-0 border-light")

setStructure(container, 'div', 'row3', "row justify-content-center align-items-stretch")
setStructure(row3, 'div', '6', "col-4 p-5 border border-5 border-start-0 border-bottom-0 border-light")
setStructure(row3, 'div', '7', "col-4 p-5 border border-5 border-bottom-0 border-light")
setStructure(row3, 'div', '8', "col-4 p-5 border border-5 border-bottom-0 border-end-0 border-light")

setStructure(container, 'div', 'row4', "row justify-content-center")
setStructure(row4, 'div', 'target', 'col-4')

setStructure(container, 'div', 'row5', "row justify-content-center text-center")
setStructure(row5, 'div', 'test', 'col-12')
setStructure(test, 'button', 'reset', 'btn btn-success')

//button text
document.getElementById('reset').innerHTML="reset game"

//global game state of the board
let gameState = [
    '', '', '',
    '', '', '',
    '','','']

//win conditions. uses a 2D array for the win con definitions
let winArr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

//needs refactoring. sets event listeners to the correct divs
document.getElementById('0').addEventListener('click', playerMove)
document.getElementById('1').addEventListener('click', playerMove)
document.getElementById('2').addEventListener('click', playerMove)
document.getElementById('3').addEventListener('click', playerMove)
document.getElementById('4').addEventListener('click', playerMove)
document.getElementById('5').addEventListener('click', playerMove)
document.getElementById('6').addEventListener('click', playerMove)
document.getElementById('7').addEventListener('click', playerMove)
document.getElementById('8').addEventListener('click', playerMove)
document.getElementById('reset').addEventListener('click', resetButton)

//global variables. turn counter, sets player letter to x to start. sets the first player turn to x's turn
let playerTurn = 0
let playerLetter = 'X'
let turnCount = 0

document.getElementById("target").innerHTML="X starts first"

//big function. uses a reference operator to grab the divs id that was clicked. then uses that to set the ID when i get element. then sets the inner html to the current players letter
//after that it changes the playerTurn from x to o. then it splices in the player letter into the correct position. then checks if the win condition has not been met yet.
//if it hasnt been met changes the letter from x to o. also shows the turn based on the playerletter
//finally it removes the event listener from what was clicked
function playerMove () {
    let playerChoice = this.id
    console.log(playerChoice)
    if(playerTurn == 0) {
        document.getElementById(`${playerChoice}`).innerHTML = playerLetter
        playerTurn++
        turnCount++
        gameState.splice(playerChoice, 1, playerLetter)
        if(!checkWin()){
            playerLetter = 'O'
            document.getElementById("target").innerHTML=playerLetter + "'s turn"
        }
        document.getElementById(`${playerChoice}`).removeEventListener('click', playerMove)
        checkWin()
    }
    else if(playerTurn == 1) {
        document.getElementById(`${playerChoice}`).innerHTML = playerLetter
        playerTurn--
        turnCount++
        gameState.splice(playerChoice, 1, playerLetter)
        if (!checkWin()){
            playerLetter = 'X'
            document.getElementById("target").innerHTML=playerLetter + "'s turn"
    }
        document.getElementById(`${playerChoice}`).removeEventListener('click', playerMove) 
        checkWin()
    }
}

//check win function. uses a .some to check the conditions in the 2D array. if any of the conditions are met, it returns true. if none have been met and the turn counter is 9, returns tie
function checkWin (){
    let winnerCheck = winArr.some((item) => {
        return (
            gameState[item[0]]
            && gameState[item[0]]==gameState[item[1]]
            && gameState[item[1]]==gameState[item[2]]
        )
    })
//if win con is met, displays win and then removes all event listeners. needs refactoring
    if (winnerCheck==true) {
        document.getElementById("target").innerHTML=playerLetter + ': WINS!'
        document.getElementById('0').removeEventListener('click', playerMove)
        document.getElementById('1').removeEventListener('click', playerMove)
        document.getElementById('2').removeEventListener('click', playerMove)
        document.getElementById('3').removeEventListener('click', playerMove)
        document.getElementById('4').removeEventListener('click', playerMove)
        document.getElementById('5').removeEventListener('click', playerMove)
        document.getElementById('6').removeEventListener('click', playerMove)
        document.getElementById('7').removeEventListener('click', playerMove)
        document.getElementById('8').removeEventListener('click', playerMove)
    }
    //if its turn 9 and a win con hasnt been met, triggers tie condition 
    else if(winnerCheck==false && turnCount == 9) {
        document.getElementById("target").innerHTML='YOU BOTH ARE TRASH'
    }
    return winnerCheck
}
//resets site back to zero blanks everything out and adds back all eventlisteners
function resetButton () {
    gameState = [
        '', '', '',
        '', '', '',
        '','','']
console.log(gameState)
    playerTurn = 0
    playerLetter = 'X'
    turnCount = 0
    document.getElementById('0').innerHTML = ''
    document.getElementById('1').innerHTML = ''
    document.getElementById('2').innerHTML = ''
    document.getElementById('3').innerHTML = ''
    document.getElementById('4').innerHTML = ''
    document.getElementById('5').innerHTML = ''
    document.getElementById('6').innerHTML = ''
    document.getElementById('7').innerHTML = ''
    document.getElementById('8').innerHTML = ''
    document.getElementById("target").innerHTML='X starts first'
    document.getElementById('0').addEventListener('click', playerMove)
    document.getElementById('1').addEventListener('click', playerMove)
    document.getElementById('2').addEventListener('click', playerMove)
    document.getElementById('3').addEventListener('click', playerMove)
    document.getElementById('4').addEventListener('click', playerMove)
    document.getElementById('5').addEventListener('click', playerMove)
    document.getElementById('6').addEventListener('click', playerMove)
    document.getElementById('7').addEventListener('click', playerMove)
    document.getElementById('8').addEventListener('click', playerMove)
}
