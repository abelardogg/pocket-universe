const express = require('express');
const router = express.Router();
const fs = require('fs');
const blog = require('../dao/blogDao');

router.get('/blog',(req, res) => {
    const getAllBlogs = blog().readAll();
    res.send(getAllBlogs);
});

router.get('/blogContent/:blogId',(req, res) => {
    const blogId = req.params.blogId;
    const blogs = blog().readAll();
    let blogRequested = null;

    for(let x = 0; x < blogs.length; x++){
        const blog = blogs[x];
        if(Number(blog.id) === Number(blogId)){
            const FILE = fs.readFileSync('views/'+blog.fullInfo, 'utf8');
            blogRequested = FILE;
            break;
        }
    }

    if(blogRequested === null){
        blogRequested = "Sorry, nothing found here!";
    }
    res.set('Content-Type', 'text/html')
    res.send(blogRequested);
});

module.exports = router;
