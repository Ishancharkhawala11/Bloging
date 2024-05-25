const Blog=require("../models/BlogModel")
const AddBlog=async(req,res)=>{
    const {title,content}=req.body
    try {
       const blog=new Blog({title,content})
       await blog.save()
       res.status(200).json({success: true,
           message: "Blog posting successful",})
    } catch (error) {
       res.status(500).json({success: false,
           message: "internal server error",})
    }
}
const Showblog=async(req,res)=>
    {
        const blog=await Blog.find({})
        try {
            if(Blog.length>0)
                {
                    res.status(200).send(blog)
                }
                else{
                    res.status(404).json({message:"no produact found"})
                }
            
        } catch (error) {
            res.status(500).send({message:"internal server error"})
        }
      
    }
    const UpdateBlog = async (req, res) => {
        const id = req.params.id;
        const content = req.body;
    
        try {
            const blog = await Blog.findByIdAndUpdate(
              {_id:id},
                { $set: content },
                { new: true }
            );
    
            if (!blog) {
                return res.status(404).json({ message: "Blog not found" });
            }
    
            res.status(200).json(blog);
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error: error.message });
        }
    
        console.log(content);
    };
    
const DeleteBlog=async(req,res)=>{
    try {
        const blog=await Blog.deleteOne({_id:req.params.id})
        if (blog.deletedCount === 0) {
            res.status(404).json({ message: "blog not found" });
        } 
        else {
            res.status(204).json({message:"delete blog"});
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
     
}
const Showblogbyid=async(req,res)=>
    {
        const id=req.params.id;
        try {
            const blog=await   Blog.findById({_id:id})
            if(blog)
                {
                    res.status(200).json(blog)
                }
                else{
                    res.status(404).json({message:"Blog not found"})
                }
        } catch (error) {
            res.status(500).json({message:"internal server error"})
        }
    }    
 
    
    
  
    
module.exports={AddBlog,Showblog,UpdateBlog,DeleteBlog,Showblogbyid}