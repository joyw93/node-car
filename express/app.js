const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();




app.use(cors('http://15.164.45.134:80'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const { sequelize, User } = require('./models');
sequelize.sync({ force: false })
  .then(() => {
      console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
      console.log(err);
  })

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}

app.set('port', process.env.PORT || 3080);

app.get('/', (req, res) => {
    res.send('Hello Express');
})

app.post('/user', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    res.send(email)
})

app.listen(app.get('port'), () => {
    console.log('http://127.0.0.1:3080')
})