const flip = () => {
    return Math.random() >= 0.5
}

const randomNumber = (n) => {
    if(n < 1 || n > 1000000)
        throw new Error('You must provide a number between 1 and 1,000,000')
    
    let randNum = 0
    let numChoices = 1
    while(true) {
        numChoices *= 2
        randNum *= 2        
        if (flip()){
            randNum += 1
        }
        if(numChoices >= n) {
            if (randNum < n){                
                return randNum
            }
            numChoices -= n
            randNum -= n
        }
    }
}
document.querySelector("#btnRand").addEventListener('click', (e) => {
    let num = document.querySelector("#txtNum").value
    document.querySelector("#txtRand").value = randomNumber(num)
})