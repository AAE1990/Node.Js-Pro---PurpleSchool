const myEmitter = require('./index');
const eventCalc = new myEmitter();

eventCalc.addListener("сложение", (a,b)=> {
    eventCalc.emit('result', a + b);
    console.log('сложение', a + b);
});

eventCalc.addListener("вычитание", (a,b)=> {
    eventCalc.emit('result', a - b)
    console.log('вычитание', a - b);
});

eventCalc.addListener("умножение", (a,b)=> {
    eventCalc.emit('result', a * b);
        console.log('умножение', a * b);
});

eventCalc.addListener("деление", (a,b)=> {
    eventCalc.emit('result', a / b);
    console.log('деление', a / b);
});

eventCalc.log('Калькулятор Эвент событий');