import express from 'express'
import * as dotenv from 'dotenv'
import  cors from 'cors'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'
dotenv.config()
import connectDB  from './mongodb/connect.js'
 try {
    connectDB(process.env.MONGODB_URL)
 }
 catch(error){
  console.log(error)
 }


const app=express()
app.use(cors())
app.use(express.json({limit:'50mb'}))
app.use('/api/v1/post',postRoutes)
app.use('/api/v1/dalle',dalleRoutes)
app.get('/',async(req,res)=>{
    res.send('Hello from DALL-E!')
})
app.listen(3000,()=>{
    console.log('server running on port 3000')
})