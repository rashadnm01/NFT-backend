require("dotenv").config()
const { PORT = 3001, DATABASE_URL } = process.env
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")
const app = express()

////////////////////////
// Connection
///////////////////////
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
mongoose.connection
.on("open", () => console.log("Connected to mongoose"))
.on("close", () => console.log("Disconnected from mongoose"))
.on("error", (error) => console.log(error))

/////////////////////////
// Middleware
/////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

//////////////////////
// Routes
//////////////////////
// Test route
app.get("/", (req, res) => {
    res.send("hello world");
  });




////////////////////////
// Listener
///////////////////////
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})