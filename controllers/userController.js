const asynchandler = require("express-async-handler")
const User = require("../model/usermodel")

const signin = asynchandler(async (req, res) => {

    const usermodel = req.body
    const email = usermodel.email

    if(!email){
        res.status(400).send("false")
    }

    try {
        
        const user = await User.findOne({ email: email })
        if (!user) {
            res.status(400).send("false")
        }
        const password = user.password
        if (usermodel.password == password) {
            res.status(200).send("true")
        }
        else {
            res.status(400).send("false")
        }
    }
    catch(err){
        console.log(err)
    }

    

})

const signup = asynchandler(async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(404).send("Data Not Found")
        return
    }

    const newUser = User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    await User.create(newUser).then(() => {
        res.status(200).send(true)
    }).catch((err) => {
        console.log(err)
    });
    
})



// const updateuser = asynchandler( async(req,res)=>{

//     const user = await User.findById(req.params.id)
//     if(!user){
//         res.status(404).json({message: "user not found"})
//     }

//     const updateuser = await User.findByIdAndUpdate(req.params.id,req.body,{new : true})

//     res.status(200).json(updateuser)

// })

// const deleteuser = asynchandler( async(req,res)=> {
//     const user = await User.findById(req.params.id)

//     if(!user) {
//         res.status(404).json({message:"User not found"})
//         return
//     }

//     await User.findByIdAndDelete(req.params.id)
//     res.status(200).json({User_Removed: req.params.id})
// })

module.exports = {
    signin, signup
}
