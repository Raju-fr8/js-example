const express = require('express');
const app = express();

app.get('/hello',(req,res)=>{
    res.send('output:Hello FR8')
});


app.listen(3000,()=>{
    console.log('port is listening 3000')
});