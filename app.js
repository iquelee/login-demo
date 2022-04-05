const express = require('express')
const path = require('path')
const router = require('./routes/router')
const app = express()
const cors = require('cors')

app.use(router)
app.use(cors())

// POST参数接受中间件
app.use( express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, './public/vue_prj/dist')))

app.listen(3000, () => {
  console.log('http://localhost:3000')
})