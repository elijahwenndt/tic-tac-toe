
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

let playerTurn = 0
let playerLetter = 'x'
// let playerChoice = '';
let turnCount = 0

function checkWin (){
    let winnerCheck = winArr.some((item) => {
        return (
            gameState[item[0]]
            && gameState[item[0]]==gameState[item[1]]
            && gameState[item[1]]==gameState[item[2]]
        )
        
    })
    console.log(winnerCheck)
    if (winnerCheck==true) {
        console.log(playerLetter + ': WINS')
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
}

function playerMove () {
    let playerChoice = this.id
    console.log(playerChoice)
    // checkWin()
    if(playerTurn == 0) {
        document.getElementById(`${playerChoice}`).innerHTML = playerLetter
        playerTurn++
        turnCount++
        gameState.splice(playerChoice, 1, playerLetter)
        checkWin()
        playerLetter = 'o'
        document.getElementById(`${playerChoice}`).removeEventListener('click', playerMove)
    }
    else if(playerTurn == 1) {
        document.getElementById(`${playerChoice}`).innerHTML = playerLetter
        playerTurn--
        turnCount++
        gameState.splice(playerChoice, 1, playerLetter)
        checkWin()
        playerLetter = 'x'
        document.getElementById(`${playerChoice}`).removeEventListener('click', playerMove) 
    }
    // checkWin()
}


