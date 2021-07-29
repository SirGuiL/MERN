const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const dataSchema = new mongoose.Schema(
  {
    username: String,
    user_email: String,
    user_type: {
      type: Number,
      default: 1,
    },
    user_pass: String,
  },
  {
    timestamps: true,
  }
)

dataSchema.pre('save', function (next) {
  if (!this.isModified('user_pass')) {
    return next
  }
  this.user_pass = bcrypt.hashSync(this.user_pass, 10)
  next()
})

const users = mongoose.model('Users', dataSchema)
module.exports = users
