const mongoose=require("mongoose")
const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    content:
    {
        type:String,
        required:true,
        unique:true
    }
},{ timestamps: true })
module.exports=mongoose.model("Blog",BlogSchema)