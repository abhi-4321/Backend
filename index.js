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

// app.get("/", (req, res) => {
//     req.accepts("html")
//     res.status(200).json(
//         {
//             "0": {
//                 message: "I am coming from backend again",
//                 key: "fhneujfejkb1244hvhbgfrzdbgfr"
//             },
//             "1": {
//                 message: "I am from backend too",
//                 key: "fajgjgsyulag12212gjsdfffsd"
//             }
//         })
// })

// app.get("/page=1", (req, res) => {
//     req.accepts("html")
//     res.status(200).json(
//         {
//             message: "I am coming from backend again",
//             key: "fhneujfejkb1244hvhbgfrzdbgfr"
//         })
// })

// app.get("/page=2", (req, res) => {

//     res.status(200).json(
//         {
//             message: "I am from backend too",
//             key: "fajgjgsyulag12212gjsdfffsd",
//             name:"Prince"
//         })
// })

// app.get("/page=3",(req,res)=> {
//     res.status(200).json({
//         message: "I am from page3",
//             key: "feesfesdg12212gjsdfffsd",
//             name:"Abhinav"
//     })
// })

app.listen(Port, () => {
    console.log("Listening on port "+ Port)
})

// app.get("/hello",(req,res) => {
//     res.send("Hello World")
// })
