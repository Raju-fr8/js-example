const express = require('express')
const app = express();
let bodyParser = require('body-parser');
const { json } = require('express/lib/response');
 
app.use(bodyParser.urlencoded({ extended: true }))

//get-read data
//post-insert data
//put-update data
//delete-delete data
//get query param - dynamically get the data from the query param
//Request body - get the data from the body using body-parser  

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

//post request body method using body-parser
app.post('/todo', (req,res)=>{
    console.log(req.body)
})

//get - read data
app.get('/hello',(req,res)=>{
    res.send('output : FR8')
});


//post - to insert data
app.post('/products',(req,res)=>{
    res.send('I will get the products');
});

//put - update data
app.put('/update',(req,res)=>{
    res.send('I can update here')
});

//get query param
app.get('/persons',(req,res)=>{
    res.json({
        name : req.query.name,
        age
    })
})


app.listen(3000, ()=>{
    console.log('port is listening 3000')
});