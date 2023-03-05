const express = require('express')
const app = express()
const port = 8000
var cors = require('cors')



const connectToMongo = require('./db')
connectToMongo();
app.use(cors())

// we want to use req.body so we are using middle ware 
app.use(express.json())


//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on http://localhost:${port}`)
})

