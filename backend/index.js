const connectToMongo = require('./db')
connectToMongo();


const express = require('express')
const app = express()
const port = 3000

// we want to use req.body so we are using middle ware 
app.use(express.json())

//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})