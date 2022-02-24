const express = require('express')
const path = require('path')

const app = express()

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

const port = process.env.PORT || 4545

app.listen(port, ()=>{
    console.log(`port is runnin on port ${port}`)
})