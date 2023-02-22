function Timer() {

  const argvs = process.argv;
  const argv = argvs.slice(2);
  const operation = argv[0];

  setTimeout(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    console.log(hours + " Час(ов): " + minutes + " минут: " + seconds + " секунд");
  }, 0);

  setImmediate(() => {
    if (operation === 'Таймер') {
      console.log(operation + ' вызова');
    }
  }) //почему-то срабатаывает невсегда
}

Timer();