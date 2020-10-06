
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const login = require('./routes/login')
const port = 4000


// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(login)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(``)
})
