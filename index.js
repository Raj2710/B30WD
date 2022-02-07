const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT = process.env.PORT || 4000;

let user = [];

app.get('/',(req,res)=>{
    res.json({
        statusCode:200,
        data:user
    })
})

app.get('/:id',(req,res)=>{
    res.json({
        statusCode:200,
        data:user[req.params.id]
    })
})

app.post('/',(req,res)=>{
    user.push(req.body)
    res.send({
        statusCode:200,
        message:"Data Saved Successfully"
    })
})

app.put('/:id',(req,res)=>{
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

app.delete('/:id',(req,res)=>{
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

app.listen(PORT, ()=>console.log('Server is up in ',PORT))