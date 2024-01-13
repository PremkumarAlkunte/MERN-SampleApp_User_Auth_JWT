const express = require ("express");
const app = express();

app.get('/test',(req,res) => {
    res.send('Hello Prem')
})

app.listen(3003,() => {
    console.log('Server started on 3003');
})
