const mongoose = require("mongoose");
const goalSchema = mongoose.Schema({
    text : {
        type : String,
        required :[true,"Please Add Text"]
    }
})

module.exports =mongoose.model("Goal",goalSchema);