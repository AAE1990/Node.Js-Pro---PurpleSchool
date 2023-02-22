  const argvs = process.argv;
  const argv = argvs.slice(2);
  const operation = argv[0];

  if (operation === 'Таймер') {
    console.log(operation + ' вызова');
  }

  setImmediate(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      console.log( hours + " Час(ов): " + minutes + " минут: " + seconds + " секунд");
});
