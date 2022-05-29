require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

// Connect to MongoDB
mongoose.connect("mongodb+srv://cohoang01:1234ls@cluster0.bycil.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
	console.log("Connected to MongoDB");
})
.catch((err) => {
	console.log(err);
})

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))