const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    res.send('Assingment 1 - Create your own random user API')
})


app.listen(PORT, () => {
    console.log(`Assingment 1 is listening on port ${PORT}`)
})