const express = require('express')
const { User } = require('../models/db')
const router = express.Router()
const db = require('../models/db')

router.use(express.json())

//判断用户是否存在，如果不存在，存储用户名密码
router.post('/register', function (req, res) {
  // const isExist = await User.findOne({name: req.body.name})
  // if(isExist) { return res.status(408).send('该用户已存在') }
  // await new db.User(req.body).save()
  res.send(req.body)
})

module.exports = router