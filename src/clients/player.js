import chalk from "chalk"

class Player{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    play(number){
        if (number % 7 === 0 || toString(number).includes('7')){
            console.log(chalk.greenBright('BOOM'))
        }
    }
}

export default Player;