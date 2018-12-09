const express = require('express')

const app = express()
app.get('/',(req, res)=>{
    res.end("siwan");
})

app.get('/print/:name/:pass',(req, res)=>{
    // res.end("name: " + req.params.name);
    res.json({username: req.param.name, password: req.params.pass})
})

app.listen(3000, () =>{
    console.log("server running")
})
