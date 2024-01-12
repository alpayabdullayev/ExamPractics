import express from 'express'
import cors from "cors"
import mongoose from 'mongoose'
import dotenv  from "dotenv"
import { ProductRoutes } from './src/routes/productRoutes.js'
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()


const PORT = process.env.PORT
const URL =process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD) 

mongoose.connect(URL).then(()=>console.log("DB CONNECTDET")).catch((err)=>console.log("DB NOT CONNECT" +err))

app.use("/api", ProductRoutes)
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})