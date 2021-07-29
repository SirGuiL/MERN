const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

const port = process.env.PORT || 5000

mongoose.connect(
  `mongodb+srv://SirGuiL21:${process.env.PASS}@cluster0.ifeyy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('MongoDB connected successfully')
    }
  }
)

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
