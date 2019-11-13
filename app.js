require("dotenv").config()
// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
// app.set('port', process.env.PORT || 3000);

// определяем обработчик для маршрута "/"
app.get("/", function (request, response) {

  // отправляем ответ
  response.send("<h2>Привет Express!</h2>" + process.env.PORT);
});
// server.js
console.log(process.env)
const port = process.env.PORT;
console.log(`Your PORT  is ${port}`);
const NODE_ENV = process.env.NODE_ENV;
console.log(`Your NODE_ENV is ${NODE_ENV}`);
// начинаем прослушивать подключения на 3000 порту
app.listen(process.env.PORT || 3000);