const mongoose = require('mongoose')

mongoose.connect('mongodb://119.3.155.221:27017/login-demo')

const userSchema = new mongoose.Schema({
  name: String,
  password: String
})

const Models = {
  User: mongoose.model('User', userSchema)
}

module.exports = Models
