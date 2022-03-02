const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello Express');
})

app.listen(app.get('port'), () => {
    console.log('http://127.0.0.1:3000')
})