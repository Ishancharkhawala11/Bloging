const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/BharatIntern").then(()=>{
    console.log("connection of mongo is done")
})
