const asynchandler = require("express-async-handler")
const Goal = require("../model/goalsmodel")

const getgoals = asynchandler( async(req,res) => {

    const goals = await Goal.find()
    res.status(200).json(goals)
})

const setgoals = asynchandler( async(req,res)=>{
    if(!req.body.text){
        res.status(404).json({message: "data not found"})
    }
    const goal = await Goal.create({

        text: req.body.text
    })
    res.status(200).json(goal)
})

const updategoal = asynchandler( async(req,res)=>{
    
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(404).json({message: "goal not found"})
    }

    const updategoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new : true})

    res.status(200).json(updategoal)

})

const deletegoal = asynchandler( async(req,res)=> {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(404).json({message:"Goal not found"})
        return
    }

    await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({idRemoved: req.params.id})
})

module.exports={
    getgoals,setgoals,updategoal,deletegoal
}
