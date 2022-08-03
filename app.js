import NumGenerator from "./src/publishers/numbers_generator.js";
import Player from "./src/clients/player.js";
import chalk from "chalk";
import promptSync from 'prompt-sync'
const prompt = promptSync()
import fs from 'fs'


function runGame(){
    fs.readFile('src/common/data.json', 'utf-8', (err, data)=>{
    //     if (data){
    //         const answer = prompt('Load previous game data?(y/n): ')
    //         if (answer === 'y'){
    //             const numGenerator = new NumGenerator(limit ? limit : 100)

    //         const playersAmount = parseInt(prompt('Enter amount of players: '))


    //         for (let i=0; i< playersAmount; i++){
    //             let name = prompt('Enter name: ')
    //             let age = prompt('Enter age: ')
    //             const player = new Player(name, age)
    //             numGenerator.on('numberRelease', player.play)
    //         }
    //     }
    // }
        console.log(data)
    })

    let gameData = {
        limit: 0,
        players: []
    }

    let limit = parseInt(prompt('Enter number limit: '))

    gameData.limit = limit

    const numGenerator = new NumGenerator(limit ? limit : 100)

    const playersAmount = parseInt(prompt('Enter amount of players: '))


    for (let i=0; i< playersAmount; i++){
        let name = prompt('Enter name: ')
        let age = prompt('Enter age: ')
        gameData.players.push({id: i, name: name, age: age})
        const player = new Player(name, age)
        numGenerator.on('numberRelease', player.play)
    }

    let data = JSON.stringify(gameData, null, 2)
    fs.writeFile('src/common/data.json', data, (err)=>{
        if (err) throw err;
        console.log('Data Saved')
    })

    numGenerator.printNumbers()
}

export default runGame;
