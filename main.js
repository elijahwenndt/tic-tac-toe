
let gameState = ['', '', '', '', '', '','','','']
let playerTurn = 0
let playerLetter = 'x'
let playerChoice = '';


function playerMove () {
    if(playerTurn == 0) {
        let playerChoice = this.id;
        document.getElementById(`${playerChoice}`).innerHTML = playerLetter
        playerTurn++
        playerLetter = 'o'
        document.getElementById(`${playerChoice}`).removeEventListener('click', playerMove)
        console.log(playerTurn)
        console.log(playerLetter)
    }
    else if(playerTurn == 1) {
        let playerChoice = this.id;
        document.getElementById(`${playerChoice}`).innerHTML = playerLetter
        playerTurn--
        playerLetter = 'x'
        document.getElementById(`${playerChoice}`).removeEventListener('click', playerMove)
        console.log(playerTurn)
        console.log(playerLetter)

    }
}
document.getElementById('0').addEventListener('click', playerMove)
document.getElementById('1').addEventListener('click', playerMove)
document.getElementById('2').addEventListener('click', playerMove)
document.getElementById('3').addEventListener('click', playerMove)
document.getElementById('4').addEventListener('click', playerMove)
document.getElementById('5').addEventListener('click', playerMove)
document.getElementById('6').addEventListener('click', playerMove)
document.getElementById('7').addEventListener('click', playerMove)
document.getElementById('8').addEventListener('click', playerMove)


