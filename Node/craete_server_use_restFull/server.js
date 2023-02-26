const express = require("express");
const port = 3000;
const app = express();
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.json())

const arr = [
    { id: 1, name: 'Tiko', password: 'kk' },
    { id: 2, name: 'Tiko', password: 'kk' },
    { id: 3, name: 'Tiko', password: 'kk' },
    { id: 4, name: 'Tiko', password: 'kk' }
]

app.post("/users",(req,res) => {
    arr.push(req.body)
    res.send(arr)
});

app.get("/users",(req,res) => {
    res.send(arr)
});

app.get("/users/:id",(req,res) => {
    res.send(arr.find(elem => elem.id === parseInt(req.params.id)))
});

app.put("/users/:id",(req,res) => {
    const id = parseInt(req.params.id)
    const obj = req.body
    arr.find(elem => {
        if(elem.id == id){
            elem.name = obj.name,
            elem.password = obj.password
        }
    })
    res.send(arr);
});

app.delete("/users/:id",(req,res) => {
    res.send(arr.filter(elem => elem.id != parseInt(req.params.id)))
});

app.listen(port,() => {
    console.log(`Listening http://localhost:${port}`)
})