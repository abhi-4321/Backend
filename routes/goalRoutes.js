const express = require("express")
const router = express.Router()
const {getgoals,setgoals,updategoal,deletegoal} = require("../controllers/goalController")

router.route("/").get(getgoals).post(setgoals)
router.route("/:id").put(updategoal).delete(deletegoal)

module.exports = router