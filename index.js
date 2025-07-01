require('dotenv').config()
console.log("chai 1920");
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('samimcom')

})
app.get('/login',(req,res) => {
 res.send('<h1>samim</h1>')
})
app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})