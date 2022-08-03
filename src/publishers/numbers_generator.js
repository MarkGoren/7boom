import { EventEmitter } from "events"

class NumGenerator extends EventEmitter{
    constructor(limit = 100){
        this.generator = this.generateNumbers(limit)
    }

    *generateNumbers(limit){
        for (let i=1; i<= limit; i++){
            yield i
        }
    }

    printNumbers(){
        const myInterval = setInterval(()=>{
            
            var value = this.generator.next().value
            if(!value){
                clearInterval(myInterval)
                return
            }
            console.log(value)
            this.emit('numberRelease', value)
        }, 1000)
    }
}

export default NumGenerator