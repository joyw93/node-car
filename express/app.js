const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors('http://15.164.45.134:80'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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