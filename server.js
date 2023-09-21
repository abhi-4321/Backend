const express = require("express")
const connectToDb = require("./config/db")
const Port = 5000
const goalroutes = require("./routes/goalRoutes")
const userroutes = require("./routes/userRoutes")
const app = express()

app.use(express.json())
connectToDb()

app.use(express.urlencoded({ exported: false }))

app.use("/goals",goalroutes)
app.use("/users",userroutes)
app.get("/",(req,res)=>{
    res.status(200).send("Hello")
})

app.listen(Port, () => {
    console.log("Listening on port "+ Port)
})
