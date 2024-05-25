const express = require('express');
const {AddBlog,Showblog, UpdateBlog, DeleteBlog, Showblogbyid} = require('../controller/BlogController');

const router= express.Router();
router.post("/Add",AddBlog)
router.get("/show",Showblog)
router.patch("/Update/:id",UpdateBlog)
router.delete("/delete/:id",DeleteBlog)
router.get("/Card/:id",Showblogbyid)
module.exports=router