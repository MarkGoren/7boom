class NumGenerator {
    constructor(limit = 100){
        this.generator = this.printNumbers(limit)
    }

    *printNumbers(limit){
        for (let i=0; i<= limit; i++){
            yield i
        }
    }
}