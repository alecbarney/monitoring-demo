const express = require('express')
const { appendFileSync } = require('fs')
const path = require('path')

const app = express()
app.use(express.json())
let student = []

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '40df665bf6ed44e39adfa2208d337f7f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.post('/api/student', (req, res)=>{
    let {name} = req.body
    name = name.trim()

    students.push(name)
    
    rollbar.log('student was added successfully', {author: 'alec', type: 'manual'})

    res.status(200).send(students)
})

app.use(rollbar.errorHandler())





const port = process.env.PORT || 4545

app.listen(port, ()=>{
    console.log(`port is runnin on port ${port}`)
})