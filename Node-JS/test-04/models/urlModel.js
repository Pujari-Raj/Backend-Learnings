const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const urlSchema = new mongose.Schema({
    shortId:{
        type: String,
        require: true,
        unique: true  //attribute for keeping shortId unique 
    },
    redirectURL:{
        type: String,
        require: true,
    },
    visitHistory: [{timestamp : {type: Number}}],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
}, {timestamps: true})

const URL = mongose.model("url", urlSchema)

module.exports = URL;