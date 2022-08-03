import { EventEmitter } from "events"

class NumGenerator extends EventEmitter{
    constructor(limit = 100){
        super();
        this.numGenerator = this.generateNumbers(limit)
    }

    *generateNumbers(limit){
        for (let i=1; i<= limit; i++){
            yield i
        }
    }

    printNumbers(){

        const listeners = this.rawListeners('numberRelease')

        const len = listeners.length

        let count = 0

        const myInterval = setInterval(()=>{
            
            var value = this.numGenerator.next().value
            if(!value){
                clearInterval(myInterval)
                return
            }
            
            if (count< len){
                listeners[count](value)
                count++
            }else{
                count = 0
                listeners[count](value)
                count++
            }
            
        }, 1000)
    }
}

export default NumGenerator