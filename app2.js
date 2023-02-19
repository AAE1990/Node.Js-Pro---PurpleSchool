const MyEmitter = require('events');

class myEmitter extends MyEmitter {
    log = (number) => {
        console.log(number);
        this.emit('сложение', 1, 5);
        this.emit('вычитание', 4, 2);
        this.emit('умножение', 16, 3);
        this.emit('деление', 10, 2);
        // this.on("result", (result)=> (result));
    }
}

module.exports = myEmitter;