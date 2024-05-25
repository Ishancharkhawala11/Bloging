const express=require("express")
require("./config/conn.js")
const BlogRoutes=require("./route/articalRouter")
// const articalRouter=require("./route/articalRouter")
// const Blog=require("./models/BlogModel.js")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/Blog",BlogRoutes)


// app.post("/Add",async(req,res)=>
// {
//      const {title,content}=req.body
//      try {
//         const blog=new Blog({title,content})
//         await blog.save()
//         res.status(200).json({success: true,
//             message: "Blog posting successful",})
//      } catch (error) {
//         res.status(500).json({success: false,
//             message: "internal server error",})
//      }
   
// })
app.listen(3000,()=>
{
    console.log("server on")
})