const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    res.send('Assingment 1 - Create your own random user API')
})

//get random user api

app.get('/user/random', (req, res) => {
    fs.readFile('./users.json',  (err, data) =>{
        if(err){
            res.send("Failed to load data")
        }
        else{
            const userData = JSON.parse(data)
            const values = Object.values(userData)
            const randomValue = values[parseInt(Math.random() * values.length)]
            res.send(randomValue)
        }
    })
})

// get all user api

app.get('/user/all', (req, res) => {
    fs.readFile('users.json', (err, data) => {
        if(err){
            res.send('Failed to load data')
        }
        else{
           res.send(JSON.parse(data))
        }
    })
})


app.listen(PORT, () => {
    console.log(`Assingment 1 is listening on port ${PORT}`)
})