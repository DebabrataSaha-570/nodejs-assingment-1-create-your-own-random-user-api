const express = require('express')
const fs = require('fs')
const app = express()
const cors = require('cors')
const PORT = 5000


app.use(cors())
app.use(express.json())

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

//save a random user api
app.post('/user/save', (req, res) =>{
    // console.log('req', req)
    const user = req.body; 
    
    const {id, name, gender, contact, address, photo_url} = user
    
    if(id, name, gender, contact, address, photo_url){

        const previousUserData = JSON.parse(fs.readFileSync('./users.json'))
        previousUserData.push(user)

        fs.writeFile('./users.json', JSON.stringify(previousUserData, null, 4),(err) =>{
            if(err){
                res.send('user failed to add')
            }
            else{
                res.send('user added successfully')
            }
        })
    }
    else {
      res.send('some property is missing. Please check the data you are giving.')  
    }
})

// //save a random user api
// app.post('/user/save', (req, res) =>{
//     // console.log('req', req)
//     const user = req.body; 
//     const {id, name, gender, contact, address, photo_url} = user

//     if(id, name, gender, contact, address, photo_url ){
//         fs.appendFile('./users.json', JSON.stringify(user), (err) => {
//             if(err){
//                 res.send('User failed to save')
//             }
//             else{
//                 res.send('User added successfully')
//             }
//         })
//     }
//     else{
//         console.log('some property is missing. Please check the data you are giving.')
//     }
//     console.log('user', user)
// })


//delete api
// app.get('/user/delete/:id', (req, res) =>{
//     const id = req.params.id; 
//     const userData = fs.readFileSync('./users.json')
//     const userDataObject = JSON.parse(userData)
//     // console.log(typeof(userDataArray))

  

//     for(const userId in userDataObject){
      
//         if(id === userId){
//            fs.unlink('./users.json', userDataObject[userId], (err) => {
//            if(err){
//             res.send('User failed to delete')
//            }
//            else{
//             res.send('user deleted successfully')
//            }
//            })

//         }
//     }
// })


app.listen(PORT, () => {
    console.log(`Assingment 1 is listening on port ${PORT}`)
})