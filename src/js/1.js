import "../scss/main.scss";

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms >= 3000) {
        resolve(ms);
      }
      reject("Промис выполнился с ошибкой (отклонён, rejected)");
    }, ms);
  });
};
const logger = (time) => console.log(`Resolved after ${time}ms`);
delay(2000)
  .then(logger)
  .catch((error) => console.log(error));
