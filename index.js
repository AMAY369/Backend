require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abhay',(req,res)=>{
  res.send("ABHAY is GREATEST OF ALL TIME")
})

app.get('/login',(req,res)=>{
  res.send("LogIn Page");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})