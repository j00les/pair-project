const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// app.use(
//   session({
//     secret: 'secretKey',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false },
//   })
// );

app.use('/', routes);

app.listen(PORT, () => {
  console.log('yay', PORT);
});
