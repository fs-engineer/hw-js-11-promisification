const btnRef = document.querySelector('.task-01');
btnRef.addEventListener('change', handleTask01Rub);

console.dir(btnRef);

function handleTask01Rub() {
  const delay = ms => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };

  const logger = time => console.log(`Resolved after ${time}ms`);

  if (btnRef.checked) {
    // Вызовы функции для проверки
    delay(2000).then(logger); // Resolved after 2000ms
    delay(1000).then(logger); // Resolved after 1000ms
    delay(1500).then(logger); // Resolved after 1500ms
  }
}
