import NumGenerator from "./src/publishers/numbers_generator.js";
import Player from "./src/clients/player.js";
import chalk from "chalk";
import promptSync from 'prompt-sync'
const prompt = promptSync()


let limit = prompt('Enter number limit: ')

const numGenerator = new NumGenerator(limit = 100)

const playersAmount = parseInt(prompt('Enter amount of players: '))


for (let i=0; i< playersAmount; i++){
    let name = prompt('Enter name: ')
    let age = prompt('Enter age: ')
    const player = new Player(name, age)
    numGenerator.on('numberRelease', player.play)
}

numGenerator.printNumbers()
