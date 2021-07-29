const User = require('../models/userModel')

module.exports = {
  index(req, res) {
    res.json({ message: 'Hello World' })
  },
  async create(req, res) {
    const { username, user_email, user_type, user_pass } = req.body

    let data = {}

    let user = await User.findOne({ user_email })
    if (!user) {
      user = await User.create({
        username,
        user_email,
        user_type,
        user_pass,
      })
      return res.status(200).json(user)
    } else {
      return res.status(500).json(user)
    }
  },
}
