const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage

// function rootCall (req, res) {
//     res.send('hello world')
//   }

// const rootCall = (req,res) => res.send('hello world')

// app.get('/', function (req, res) {
//   res.send('hello world')
// })

app.get('/',  (req, res)  =>{
    res.send('hello world')
  })
  
app.listen(3000, () => console.log('Listening to port 3000'))