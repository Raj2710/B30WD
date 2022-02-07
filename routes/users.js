var express = require('express');
var router = express.Router();

let user = [];

router.get('/',(req,res)=>{
    res.json({
        statusCode:200,
        data:user
    })
})

router.get('/:id',(req,res)=>{
    res.json({
        statusCode:200,
        data:user[req.params.id]
    })
})

router.post('/',(req,res)=>{
    user.push(req.body)
    res.send({
        statusCode:200,
        message:"Data Saved Successfully"
    })
})

router.put('/:id',(req,res)=>{
    if(req.params.id<user.length)
    {
        user.splice(req.params.id,1,req.body);
        res.json({
            statusCode:200,
            message:"User Updated Successfully"
        })
    }
    else{
        res.json({
            statusCode:400,
            message:"Invalid User ID"
        })
    }
})

router.delete('/:id',(req,res)=>{
    if(req.params.id<user.length)
    {
        user.splice(req.params.id,1);
        res.json({
            statusCode:200,
            message:"User Deleted Successfully"
        })
    }
    else{
        res.json({
            statusCode:400,
            message:"Invalid User ID"
        })
    }
})

module.exports = router;