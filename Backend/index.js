import express from 'express'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express()

app.use(cors()); //to allow cross-origin requests
app.use(express.json()); //json data ko parse krne k liye jo postman se aata hai

dotenv.config() // to use .env file

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB:', error)
}   

//defining Routes
app.use('/book',bookRoute);
app.use('/user',userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
