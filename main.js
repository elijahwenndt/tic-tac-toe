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

const container = document.getElementById('container')
container.setAttribute("class", "container text-center justify-content-center align-items-center vh-100 text-light")

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

document.getElementById('reset').innerHTML="reset game"


let gameState = [
    '', '', '',
    '', '', '',
    '','','']

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

let playerTurn = 0
let playerLetter = 'X'
let turnCount = 0

document.getElementById("target").innerHTML="X starts first"
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

function checkWin (){
    let winnerCheck = winArr.some((item) => {
        return (
            gameState[item[0]]
            && gameState[item[0]]==gameState[item[1]]
            && gameState[item[1]]==gameState[item[2]]
        )
    })

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
    else if(winnerCheck==false && turnCount == 9) {
        document.getElementById("target").innerHTML='YOU BOTH ARE TRASH'
    }
    return winnerCheck
}

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
