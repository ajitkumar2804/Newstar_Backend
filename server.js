const express = require('express')
const app = express();
const bodyparser =require('body-parser')
const cors =require('cors')
const routes = require('./routes/routes')
app.use(cors());
// app.use('/newsapi' ,routes)

app.use('/', routes)
var port= process.env.PORT || 8001
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

module.exports = app;