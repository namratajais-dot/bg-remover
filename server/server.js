import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
// import userRouter from './routes/userRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()

// Initialize Middleware
app.use(express.json())
app.use(cors())

// API routes
app.get('/', (req, res) => res.send("API Working"))
// app.use('/api/user',userRouter)

app.listen(PORT, () => console.log(`Server is running on port `+ PORT))
const startServer = async () => {
  try {
    await connectDB()
    console.log("DB connected")
  } catch (err) {
    console.error("Failed to connect DB:", err)
  }
}

await startServer()

// ✅ Export app for Vercel
// export default app
