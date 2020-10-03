
let userScore = document.getElementById('userScore')
let botScore = document.getElementById('botScore')
let userscore = 0
let botscore = 0


const r = document.getElementById('rock')
const p = document.getElementById('paper')
const s = document.getElementById('sicor')
const result = document.getElementById('results')
// const botResult = document.getElementById('bot_result

const win = ( myChoice , botchoice) =>{
    result.innerHTML = `Bot Choose <span id="bot_result_win">${botchoice}</span>. You Win <sup>!!</sup>`
    userscore++;
    userScore.innerHTML = `${userscore}`
    console.log(`${botchoice}`)
}
const lose = ( myChoice , botchoice) =>{
    result.innerHTML = `Bot Choose <span id="bot_result_loose">${botchoice}</span>. You Loose <sup>....</sup>`
    botscore++;
    botScore.innerHTML = `${botscore}`
    console.log(`${botchoice}`)
}
const draw = ( myChoice , botchoice) =>{
    result.innerHTML = `Bot Choose <span id="bot_result_draw">${botchoice}</span>. Its A Draw :)`
    console.log(`${botchoice}`)
}



const game = (userChoice) => {

    let myChoice = userChoice
    let botOptions = ['Rock', 'Paper', 'Scissor']

    let botchoice = botOptions[(Math.floor(Math.random() * 3))]

    switch (myChoice + botchoice) {
        case 'roScissor':
        case 'paRock':
        case 'siPaper':
               win( myChoice , botchoice);
            break;
        case 'roPaper':
        case 'paScissor':
        case 'siRock':
               lose( myChoice , botchoice);
            break;
        case 'roRock':
        case 'paPaper':
        case 'siScissor':
                draw( myChoice , botchoice);
            break;
  }


}




r.addEventListener('click', function () {
    game('ro')
})
p.addEventListener('click', function () {
    game('pa')
})
s.addEventListener('click', function () {
    game('si')
})






