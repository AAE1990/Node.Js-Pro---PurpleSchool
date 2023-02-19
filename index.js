const CalcApp = require('./app');
const myEmitter = require('./app2');
const eventCalc = new myEmitter();

eventCalc.addListener("сложение", (a,b)=> {
    eventCalc.emit('result', a + b);
    console.log('сложение', a + b);
});

eventCalc.addListener("вычитание", (a,b)=> {
    eventCalc.emit('result', a - b);
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

/* eventCalc.on('error', (err) => {
    console.log(`Произошла обишка: ${err.message}`);
});
eventCalc.emit('error', new Error('Ошибочка')); */

console.log(CalcApp);
eventCalc.log('Калькулятор Эвент событий');