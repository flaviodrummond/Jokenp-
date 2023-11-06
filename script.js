let result = document.querySelector('.result')
let yourPoints = document.querySelector('.your-points')
let computerPoints = document.querySelector('.computer-points')

let yourPointsNumber = 0
let computerPointsNumber = 0

let humanClicked = (userChoice) => {

    winnerAndLoser(userChoice, computerInstead())

}

let computerInstead = () => {

    let choiceOfComputer = ['Pedra', 'Papel', 'Tesoura']
    let randomNumber = Math.floor(Math.random() * 3)

    return choiceOfComputer[randomNumber]

}

let winnerAndLoser = (you, computer) => {

    console.log(you + ': humano', computer + ': maquina')

    if (you === computer) {

        result.innerHTML = 'Deu empate !'

    } else if ((you === 'Pedra' && computer === 'Tesoura') ||
        (you === 'Papel' && computer === 'Pedra') ||
        (you === 'Tesoura' && computer === 'Papel')) {

        yourPointsNumber++
        yourPoints.innerHTML = yourPointsNumber
        result.innerHTML = 'Você ganhou !'

    } else {

        computerPointsNumber++
        computerPoints.innerHTML = computerPointsNumber
        result.innerHTML = 'Você perdeu !'
    }

}