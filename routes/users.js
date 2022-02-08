var express = require('express');
var router = express.Router();
const {dbUrl,mongodb,MongoClient} = require('../dbSchema');
/* GET users listing. */
router.get('/', function(req, res) {

});


router.get('/all',async(req,res)=>{
  const client = await MongoClient.connect(dbUrl)
  try 
  {
    const db = await client.db('b30wd')
    let users = await db.collection('users').find().toArray();
    res.json({
      statusCode:200,
      users
    })
  } catch (error) 
  {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal server Error"
    })
  }
  finally
  {
    client.close();
  }
})

router.get('/get/:id',async(req,res)=>{
  const client = await MongoClient.connect(dbUrl)
  try 
  {
    const db = await client.db('b30wd')
    let users = await db.collection('users').find({_id: mongodb.ObjectId(req.params.id)}).toArray();
    res.json({
      statusCode:200,
      users
    })
  } catch (error) 
  {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal server Error"
    })
  }
  finally
  {
    client.close();
  }
})

router.post('/signup',async(req,res)=>{
  const client = await MongoClient.connect(dbUrl)
  try 
  {
    const db = await client.db('b30wd')
    let users = await db.collection('users').find({email:req.body.email}).toArray();
    if(users.length>0)
    {
      res.json({
        statusCode:400,
        message:"User Already Exists"
      })
    }
    else
    {
      let document = await db.collection('users').insertOne(req.body)
      res.json({
        statusCode:201,
        message:"Sign Up successfull",
        data:document
      })
    }
  } catch (error) 
  {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal server Error"
    })
  }
  finally
  {
    client.close();
  }
})

router.post('/login',async(req,res)=>{
  const client = await MongoClient.connect(dbUrl)
  try 
  {
    const db = await client.db('b30wd')
    let users = await db.collection('users').find({email:req.body.email}).toArray();
    if(users.length>0)
    {
        let user = await db.collection('users').findOne({email:req.body.email})
        if(user.password === req.body.password)
        {
            res.json({
              statusCode:200,
              message:"Login Successfull"
            })
        }
        else{
          res.json({
            statusCode:400,
            message:"Invalid Credentials"
          })
        }
    }
    else{
      res.json({
        statusCode:404,
        message:"User Not Found"
      })
    }
    
  } catch (error) 
  {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal server Error"
    })
  }
  finally
  {
    client.close();
  }
})

router.put('/change-password',async(req,res)=>{
  const client = await MongoClient.connect(dbUrl)
  try 
  {
    const db = await client.db('b30wd')
    let users = await db.collection('users').find({email:req.body.email}).toArray();
    if(users.length>0)
    {
      
      if(users[0].password===req.body.oldPassword)
      {
        let update = await db.collection('users').updateOne({email:req.body.email},{$set:{password:req.body.newPassword}})
        res.json({
          statusCode:200,
          message:"Password Updated Successfully"
        })
      }
      else{
        res.json({
          statusCode:400,
          message:"Invalid Credentials"
        })
      }
    }
    else{
      res.json({
        statusCode:400,
        message:"User does not exists"
      })
    }
  } catch (error) 
  {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal server Error"
    })
  }
  finally
  {
    client.close();
  }
})

module.exports = router;
